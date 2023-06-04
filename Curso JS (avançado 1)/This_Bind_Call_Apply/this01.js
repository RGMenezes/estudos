//É a palavra usada para apontar para um objeto. E esse objeto dependerá do contexto, por exemplo, quando usamos a palavra this diretamente, o retorno será o objeto global.




//Usando dentro de uma função

function thisNaoEstrito(){
    console.log(this);
};

function thisEstrito(){
    'use strict';
    console.log(this);
};

//thisNaoEstrito();
//thisEstrito();




//Usando como método de um objeto

const o = {
    prop: 100,
    f: function(){
        return this.prop;
    }
};

console.log(o.f());




//Usando dentro de uma função arrow

//Nas arrow functions, o this é definido lexicalmente, isto é, seu valor é definido pelo contexto de execução onde está inserido. Em um código global, this assume o objeto global.

//Contexto de criação
//Global

const arrowfunctionThis = () => { console.log(this); };


//Objeto / errado

const arrowFunctionThis = {
    prop: 150,
    arrowF: () => { console.log(this); } // O retorno do objeto será vazio
};

console.log(arrowFunctionThis.arrowF());


//Objeto / correto

const obj1 = {
    exemplo1: "exemplo",
    mostraThis: function(){
        console.log( ( ()=>this )() ); // O retorno do obejeto será os seus parâmetros
    }
};

console.log(obj1.mostraThis());

debugger