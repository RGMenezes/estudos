const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Categoria");
const Categorias = mongoose.model("categorias");

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get("/posts", (req, res) => {
    res.send("Página de posts");
});

router.get('/categorias', (req, res) => {
    res.render("admin/categorias");
});

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias");
});

router.post("/categorias/nova", (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    };

    new Categorias(novaCategoria).save().then(() =>  {
        console.log("Categoria criada com sucesso!");
    }).catch((err) => {
        console.log(`Erro ao criar categoria: ${err}`);
    });
});

router.get('/categorias', (req, res) => {
    res.send("Página de categorias");
});


module.exports = router;