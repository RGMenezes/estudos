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