module.exports = {
    eAdmin: function(req, res, next){
        console.log(req.userAdmin)
        if(req.isAuthenticated()){ //Função gerada pelo passport que verifica se o usuário está ou não autenticado.
            return next();
        };
        req.flash("error_msg", "Você precisa ser um administrador para acessar esta rota!");
        res.redirect("/");
    }
};