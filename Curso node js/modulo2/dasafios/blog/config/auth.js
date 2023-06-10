//Este tipo de autênticação pode ser feito em qualquer banco de dados.
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Model de usuário.
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");


module.exports = function(passport) {

    passport.use(new localStrategy({usernameField: "email"}, (email, senha, done) => {//Escolhe o campo a ser analizado. No caso o email.


        Usuario.findOne({email: email}).then((usuario) => { //Pesquisa o usuário no banco de dados.

            if(!usuario){
                return done(null, false, {message: "Esta conta não existe"}); //O done é uma função de callback. Podemos passar 3 parâmetros (dados da conta autênticada, se houve sucesso ou não e o retorno(que no caso é a mensagem.))
            };
            bcrypt.compare(senha, usuario.senha, (erro, batem) => { //compara dois valores encriptados.
                if(batem){
                    return done(null, user);
                }else{
                    return done(null, false, {message: "Senha incorreta"});
                };
            });


        }).catch((err) => {
            return done(null, false, {message: "Erro ao carregar o usuário"});
        });
    }));


    //Salvar o usuário na sessão.
    passport.serializeUser((usuario, done) => { //Salva os dados do usuário em uma sessão.
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done) => { //Procura o usuário pelo id.
        User.findById(id, (err, usuario) => {
            done(err, user);
        });
    });

};