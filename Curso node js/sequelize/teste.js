/* Conectando ao banco de dados mysql usando o soquelize. */

const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "123456", { 
    //1º parametro = nome do banco de dados, 2° usuario para se conectar ao mysql, 3º senha. 4° objeto json.
    host: "localhost", //Qual servidor está o mysql.
    dialect: 'mysql' //Qual tipo de banco de dados está se conectando.

});

sequelize.authenticate().then(() => {
    console.log("Servidor conectado com sucesso!");
}).catch((error) => {
    console.log("falha ao se conectar: " + error);
});



/* Criando models */
//os comandos que atualizam o banco de dados precisam ser apagados para não criar mais do que se quer.
//postagem

const Postagem = sequelize.define("postagens", { //É recomendado que o nome da tabela seja no plural.
    titule: {
        type: Sequelize.STRING //Possui limite de caracteres.
    },
    conteudo: {
        type: Sequelize.TEXT //Não possui limite de caracteres.
    }
});

//Postagem.sync({force: true}); //sincroniza o model com o mysql.

//Adicionando dado
/*Postagem.create({
    titule: "Um titulo qualquer",
    conteudo: "adicionando um dado ao banco de dados na tabela postagem."
});*/


//usuarios

const Usuarios = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Usuarios.sync({force: true});

//Adicionando dado.

/*Usuarios.create({
    nome: "Rafael",
    sobrenome: "menezes",
    idade: 18,
    email: "rafaelmenezes@email.com"
});*/