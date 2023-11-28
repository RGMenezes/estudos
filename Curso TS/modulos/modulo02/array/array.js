"use strict";
let frutas = ['abacaxi', 'mamão', 'maca', 'laranja'];
let idade = [12, 24, 41, 19, 11];
let exemploArray = [...frutas];
let exemploArray2 = new Array(...frutas);
console.log("Array string padrão: " + frutas + `. Tipo = ${typeof frutas}`);
console.log("Array number padrão: " + idade + `. Tipo = ${typeof idade}`);
console.log("Array Object: " + exemploArray + `. Tipo = ${typeof exemploArray}`);
console.log("Array Object construtor: " + exemploArray2 + `. Tipo = ${typeof exemploArray2}`);
