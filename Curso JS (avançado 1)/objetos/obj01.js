//Um objeto é uma coleção de dados relacionados e/ou funcionalidades (que geralmente consistem em diversas variáveis e funções - que são chamadas propriedades e métodos quando estão dentro de um objeto).

const objetoNome = {
    prop1: "sou uma propriedade",
    metodo: function(){
        return "Sou o retorno de um método"
    }
};




//Acessando elementos de objetos:

//DotNotatio
console.log(objetoNome.prop1);
console.log(objetoNome.metodo());

objetoNome.prop1 = "Declarando uma propriedade";
objetoNome.metodo = () => "Declarando um método";



//Bracket notation
console.log(objetoNome['prop1']);
console.log(objetoNome['metodo']());

objetoNome['prop1'] = "Declarando uma propriedade novamente";
objetoNome['metodo'] = () => "Declarando um metodo novamente";
