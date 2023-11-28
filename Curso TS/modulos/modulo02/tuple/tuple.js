"use strict";
//Tuplas ou Tuples armazenam campos de diferentes tipos. Podemos dizer que ela é uma evolução de um array.
//Podem ser passadas como parâmetros para funções.
//Considerada array com número fixo de elementos.
let pessoa; //Exemplo de tupla.
pessoa = ['Rafael', 'Menezes', 1]; //É necessário declarar em todos os indices preenchidos.
//pessoa = [18, 'Rafael', 'Menezes'] //A ordem deve ser respeitada!
//Acessamos seus elementos igualmente a um array;
console.log(pessoa[0]);
let fruta = ['abacaxi', 'uva', 'maca', 'manga']; //Array
let listaFrutas = ['laranja', ...fruta]; //Tupla, usamos label (...string[]) para evitar a repetição de tipos.
console.log(...listaFrutas);
let pessoa2 = ['Rafael', 18]; //Outra maneira de se utilizar a tupla.
console.log(pessoa2);
let listaFrutas2 = [4, true, ...listaFrutas]; //Podemos adicionar valores de outras tuplas dentro de uma nova tupla.
console.log(listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
;
console.log(listarPessoas(['Rafael Menezes', 'Qualquer outro'], [18, 12]));
let NomeCompleto = ['Rafael', 'da Gloria', 'Menezes'];
let NomeSobrenome = ['Rafael', 'Menezes'];
console.log(`Type 2 = ${NomeSobrenome}. \nType 1 = ${NomeCompleto}`);
