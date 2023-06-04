const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html");//Mando um arquivo para quem acessar essa rota.
    //O __dirname retorna a pasta raiz do projeto.
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog.");
});

app.get("/ola/:cargo/:nome", function(req, res){ //O req recebe dados de uma requisição.
    res.send(`Voce e ${req.params.cargo}, e seu nome e ${req.params.nome}.`);
});


app.listen(8081, function(){ //função de callback
    console.log("Servidor rodando na porta http://localhost:8081");
}); //Obrigatoriamente esta tem que ser a última linha do código, porque não funciona mais nada relacionado ao express abaixo dela.