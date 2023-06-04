//Usamos os parâmetros com valores pré definidos quando não queremos que o parâmetro tenha seu valor como undefined, evitando retornar algum tipo de erro.

//Exemplo de como se fazia antigamente:
function multiplicar(a, b){
    b = typeof b !== "undefined" ? b : 1;
    a = typeof a !== "undefined" ? a : 1;
    return a*b;
};

console.log(multiplicar(50));


//Exemplo de como fazemos atualmente:
function multiplicar2(a=1, b=1){
    return a*b;
};

console.log(multiplicar2(20));


//Outros exemplos:
function teste (num = 1){
    console.log(typeof num, num);
};
teste();
teste(undefined); //Observa-se que apenas o valor undefined é convertido em 1.

teste(" "); //" " e null não são afetados.
teste(null)


function concatenador(value, array = []){
    array.push(value);
    return array;
};

concatenador(1);
concatenador(2);
console.log(concatenador(3));


function chamaAlgumaCoisa(coisa = algumaCoisa()){return coisa;};
function algumaCoisa(){return "sth";};

console.log(chamaAlgumaCoisa());


function somaArrayObjetos([x, y] = [1,2], {z:z} = {z:3}){
    return x + y + z;
};

console.log(somaArrayObjetos());
console.log(somaArrayObjetos([3,4], {z:1}));