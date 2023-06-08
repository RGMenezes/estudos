//Carregando módulos

const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require('./routes/admin')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require("connect-flash");
require("./models/Postagem");
const Postagem = mongoose.model("postagens");

//Configurações
    //Sessão
    app.use(session({
        secret: "podeserqualquercoisaporemdevesersegura",
        resave: true,
        saveUninitialized: true
    }));

    app.use(flash());

    //Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg = req.flash("error_msg");
        next();
    });

    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //Handlebars
    app.engine('handlebars', engine({
        defaultLayout: 'main',
        runtimeOptions:{
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }));
    app.set('view engine', 'handlebars');
    app.set('views', './views');

    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://127.0.0.1:27017/blogapp").then(() => {
            console.log("Conectado ao mongo...");
        }).catch((err) => {
            console.log("Erro ao se conectar ao mongo: "+err);
        });

    // Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas

app.get('/', (req, res) => {
    Postagem.find().populate("categoria").sort({data: "desc"}).then((postagens) => {
        res.render("index", {postagens: postagens});
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno");
        res.redirect("/404");
    });
});

app.get("/404", (req, res) => {
    res.send("Erro 404!");
});

app.get('/posts', (req, res) => {
    res.send("Lista de posts");
});

app.use('/admin', admin);

//Outros
const PORT = 8081;

app.listen(PORT, () => console.log("Servidor rodando...") );