//Carregando módulos

const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require('./routes/admin')
const path = require('path');
const mongoose = require('mongoose');

//Configurações
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

    app.use((req, res, next) => {
        console.log("OI eu sou um middleware");
        next();
    });

//Rotas

app.get('/', (req, res) => {
    res.send("Rota principal");
});

app.get('/posts', (req, res) => {
    res.send("Lista de posts");
});

app.use('/admin', admin);

//Outros
const PORT = 8081;

app.listen(PORT, () => console.log("Servidor rodando...") );