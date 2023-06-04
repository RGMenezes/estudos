//Ambas possuem uma sintaxe indêntica. A diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.

//Call
//Invoca uma função com um dado valor this e argumentos passados individualmente.

const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function thisCallExemplo(){
        console.log(this)
    }
};

obj1.mostraThis();

const obj2 = {
    exemplo2: "exemplo2"
};

obj1.mostraThis.call(obj2);



//Apply
//Chama uma função com um dado valor this e argumento, como um array (ou um objeto parecido com um array)

const objeto1 = {
    exemplo1: "exemplo 1",
    mostraThis: function thisApplyExemplo(a, b, c){
        console.log(this)
    }
};

objeto1.mostraThis();

objeto1.mostraThis.apply(obj2, [1,2,3]); // Os [] é justamente a diferença entre call e apply, call usamos (obj, p1, p2, p3) já o apply usamos (obj, [p1, p2, p3])