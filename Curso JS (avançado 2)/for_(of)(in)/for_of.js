//O loop for of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamamos uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

const listaDeEstados = ["RJ", "SP", "MG"];

for(let estado of listaDeEstados){ //Podemos declarar o let fora do laço
    console.log(`${estado} é um estado brasileiro.`)
};



//Podemos usar em Strings também

const str = "Rafael Menezes";
let s;

for(s of str){ //O código se repete para cada caracter da String
    console.log(str.toLocaleUpperCase());
};