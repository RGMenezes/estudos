const express = require("express");
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require("body-parser");
const Post = require("./models/Post");


// Config
    // Tamplete Engine
        app.engine('handlebars', engine());
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    // Body parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//Rotas

    app.get('/', function(req, res){
        res.render('home');
    });

    app.get("/cad", function(req, res){
        res.render('formulario');
    });

    app.post("/add", function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
       }).then(() => {
            res.redirect('/');
       }).catch((error) => {
            res.send("Houve um erro: " + error);
       });
    });
    //teste



app.listen(5000, function(){
    console.log("Servidor rodando com sucesso!")
});