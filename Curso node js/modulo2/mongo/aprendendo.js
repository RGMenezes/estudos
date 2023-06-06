const mongoose = require('mongoose');

//Configorando mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB conectado...");
    }).catch((error) => {
        console.log("Servidor não iniciado, erro: " + error);
    });


//Criando models

//definindo
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais:  {
            type: String
        }
    });

//collection
    mongoose.model('usuarios', UsuarioSchema);



//Criando e adicionando dados na collection
const Rafael = mongoose.model("usuarios");
new Rafael({
    nome: "Rafael",
    sobrenome: "Menezes",
    email: "email@email.com",
    idade: 18,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuario salvo com sucesso!");
}).catch((error) => {
    console.log("Não foi possivel salvar o usuario, ERRO: " + error)
});