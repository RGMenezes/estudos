const express = require("express");
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require("body-parser");


// Config
    // Tamplete Engine
        app.engine('handlebars', engine());
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    // Body parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//Rotas

    app.get("/cad", function(req, res){
        res.render('formulario');
    });

    app.post("/add", function(req, res){
        res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
    });
    //teste



app.listen(5000, function(){
    console.log("Servidor rodando com sucesso!")
});