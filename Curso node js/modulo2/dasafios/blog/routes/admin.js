const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Categoria");
const Categorias = mongoose.model("categorias");
require("../models/Postagem");
const Postagens = mongoose.model("postagens");

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get("/posts", (req, res) => {
    res.send("Página de posts");
});

router.get('/categorias', (req, res) => {
    Categorias.find().sort({date: "desc"}).then((categorias) => {
        res.render("admin/categorias", {categorias: categorias});
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias");
        res.redirect("/admin");
    });
});

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias");
});

router.post("/categorias/nova", (req, res) => {

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

router.get("/categorias/edit/:id", (req, res) => {
    Categorias.findOne({_id: req.params.id}).then((categoria) => {
        res.render("admin/editcategoria", {categoria: categoria});
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe");
        res.redirect("/admin");
    });
});

router.post('/categorias/edit', (req, res) => {
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

router.post("/categorias/deletar", (req, res) => {
    Categorias.deleteOne({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!");
        res.redirect("/admin/categorias");
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria!");
        res.redirect("/admin/categorias");
    });
});

router.get('/postagens', (req, res) => {

    Postagens.find().populate("categoria").sort({data:"desc"}).then((postagens) => {
        res.render("admin/postagens", {postagens: postagens});
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as postagens!");
        res.redirect("/admin");
    });

});

router.get("/postagens/add", (req, res) => {
    Categorias.find().then((categorias) => {
        res.render("admin/addpostagens", {categorias: categorias});   
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulario!");
        res.redirect("/admin");
    });
});

router.post("/postagens/nova", (req, res) => {
    let erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null || req.body.nome.length > 255){
        erros.push({texto: "Nome inválido"});
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

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da postagem é muito pequeno"});
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
            nome: req.body.nome,
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


module.exports = router;