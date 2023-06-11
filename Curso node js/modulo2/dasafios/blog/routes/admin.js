const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Categoria");
const Categorias = mongoose.model("categorias");
require("../models/Postagem");
const Postagens = mongoose.model("postagens");
const {eAdmin} = require("../helpers/eAdmin");

router.get('/', eAdmin, (req, res) => {
    res.render("admin/index");
});

router.get("/posts", eAdmin, (req, res) => {
    res.send("Página de posts");
});

router.get('/categorias', eAdmin, (req, res) => {
    Categorias.find().sort({date: "desc"}).then((categorias) => {
        res.render("admin/categorias", {categorias: categorias});
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias");
        res.redirect("/admin");
    });
});

router.get('/categorias/add', eAdmin, (req, res) => {
    res.render("admin/addcategorias");
});

router.post("/categorias/nova", eAdmin, (req, res) => {

    let erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"});
    };

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"});
    };

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria é muito pequeno"});
    };

    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros});
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        };
    
        new Categorias(novaCategoria).save().then(() =>  {
            req.flash("success_msg", "Categoria criada com sucesso!");
            res.redirect("/admin/categorias");
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!");
            res.redirect("/admin/categorias");
        });
    };
});

router.get("/categorias/edit/:id", eAdmin, (req, res) => {
    Categorias.findOne({_id: req.params.id}).then((categoria) => {
        res.render("admin/editcategoria", {categoria: categoria});
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe");
        res.redirect("/admin");
    });
});

router.post('/categorias/edit', eAdmin, (req, res) => {
    let erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"});
    };

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"});
    };

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria é muito pequeno"});
    };

    if(erros.length > 0){
        Categorias.findOne({_id: req.body.id}).lean().then((categoria) => {
            res.render("admin/editcategoria", {categoria: categoria, erros: erros});
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao pegar dados!");
                res.redirect("/admin/categorias");
        });
    }else{

        Categorias.findOne({_id: req.body.id}).then((categoria) => {
            categoria.nome = req.body.nome;
            categoria.slug = req.body.slug;

            categoria.save().then(() => {
                req.flash('success_msg', 'Categoria editada com sucesso!');
                res.redirect("/admin/categorias");
            }).catch((err) => {
                req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria!");
                res.redirect("/admin/categorias");
            });
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar a categoria!");
            res.redirect("/admin/categorias");
        });
    };
});

router.post("/categorias/deletar",  eAdmin, (req, res) => {
    Categorias.deleteOne({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!");
        res.redirect("/admin/categorias");
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria!");
        res.redirect("/admin/categorias");
    });
});

router.get('/postagens', eAdmin, (req, res) => {

    Postagens.find().populate("categoria").sort({data:"desc"}).then((postagens) => {
        res.render("admin/postagens", {postagens: postagens});
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as postagens!");
        res.redirect("/admin");
    });

});

router.get("/postagens/add", eAdmin, (req, res) => {
    Categorias.find().then((categorias) => {
        res.render("admin/addpostagens", {categorias: categorias});   
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulario!");
        res.redirect("/admin");
    });
});

router.post("/postagens/nova", eAdmin, (req, res) => {
    let erros = [];

    if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null || req.body.titulo.length > 255){
        erros.push({texto: "Título inválido"});
    };

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null || req.body.slug.length > 255){
        erros.push({texto: "Slug inválido"});
    };

    if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null || req.body.descricao.length > 255){
        erros.push({texto: "Descrição inválida"});
    };

    if(!req.body.conteudo || typeof req.body.conteudo == undefined || req.body.conteudo == null){
        erros.push({texto: "Conteudo inválido"});
    };

    if(req.body.categoria == "0"){
        erros.push({texto: "Categoria inválida, registre uma categoria"})
    };

    if(req.body.titulo.length < 2){
        erros.push({texto: "Título da postagem é muito pequeno"});
    };

    if(erros.length > 0){
        Categorias.find().lean().then((categorias) => {
            res.render("admin/addpostagens", {erros: erros, categorias: categorias});
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao carregar dados, tente novamente!");
            res.redirect("/admin/postagens");
        });
    }else{
        const novaPostagem = {
            titulo: req.body.titulo,
            slug: req.body.slug,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo, 
            categoria: req.body.categoria
        };
    
        new Postagens(novaPostagem).save().then(() =>  {
            req.flash("success_msg", "Postagem criada com sucesso!");
            res.redirect("/admin/postagens");
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a postagem, tente novamente!");
            res.redirect("/admin/postagens");
        });
    };
});

router.get("/postagens/edit/:id", eAdmin, (req, res) => {

    Postagens.findOne({_id: req.params.id}).then((postagem) => {
        Categorias.find().then((categorias) => {
            res.render("admin/editpostagens", {postagem: postagem, categorias: categorias});
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar as categorias");
            res.redirect("admin/postagens");
        });
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário de edição");
        res.redirect("admin/postagens");
    });
});

router.post("/postagens/edit", eAdmin, (req, res) => {
    let erros = [];

    if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null || req.body.titulo.length > 255){
        erros.push({texto: "Título inválido"});
    };

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null || req.body.slug.length > 255){
        erros.push({texto: "Slug inválido"});
    };

    if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null || req.body.descricao.length > 255){
        erros.push({texto: "Descrição inválida"});
    };

    if(!req.body.conteudo || typeof req.body.conteudo == undefined || req.body.conteudo == null){
        erros.push({texto: "Conteudo inválido"});
    };

    if(req.body.categoria == "0"){
        erros.push({texto: "Categoria inválida, registre uma categoria"})
    };

    if(req.body.titulo.length < 2){
        erros.push({texto: "Título da postagem é muito pequeno"});
    };

    if(erros.length > 0){
        Postagens.findOne({_id: req.body.id}).lean().then((postagem) => {
            Categorias.find().lean().then((categorias) => {
                res.render("admin/editpostagens", {erros: erros, postagem: postagem, categorias: categorias});
            }).catch((err) => {
                req.flash("error_msg", "Houve um erro ao carregar dados, tente novamente!");
                res.redirect("/admin/postagens");
            });
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao carregar dados, tente novamente!");
            res.redirect("/admin/postagens");
        });
    }else{
        
        Postagens.findOne({_id: req.body.id}).then((postagem) => {
            postagem.titulo = req.body.titulo
            postagem.slug = req.body.slug
            postagem.descricao = req.body.descricao
            postagem.conteudo = req.body.conteudo
            postagem.categoria = req.body.categoria

            postagem.save().then(() => {
                req.flash("success_msg", "Postagem editada com sucesso!");
                res.redirect("/admin/postagens");
            }).catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar a postagem, tente novamente!");
                res.redirect("/admin/postagens");
            });
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar a postagem, tente novamente!");
            res.redirect("/admin/postagens");
        });

    };
});


router.get("/postagens/deletar/:id", eAdmin, (req, res) => { //Essa forma de deletar não e muito segura.
    Postagens.deleteOne({_id: req.params.id}).then(() => {
        req.flash("success_msg", "Postagem deletada com sucesso!");
        res.redirect("/admin/postagens");
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a postagem");
        res.redirect("/admin/postagens");
    });
});

module.exports = router;