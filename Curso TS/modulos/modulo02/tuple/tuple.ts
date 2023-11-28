//Tuplas ou Tuples armazenam campos de diferentes tipos. Podemos dizer que ela é uma evolução de um array.
//Podem ser passadas como parâmetros para funções.
//Considerada array com número fixo de elementos.

let pessoa: [string, string, number]; //Exemplo de tupla.

pessoa = ['Rafael', 'Menezes', 1]; //É necessário declarar em todos os indices preenchidos.
//pessoa = [18, 'Rafael', 'Menezes'] //A ordem deve ser respeitada!

//Acessamos seus elementos igualmente a um array;
console.log(pessoa[0]);


let fruta: string[] = ['abacaxi', 'uva', 'maca', 'manga']; //Array

let listaFrutas: [string, ...string[]] = ['laranja', ...fruta]; //Tupla, usamos label (...string[]) para evitar a repetição de tipos.
console.log(...listaFrutas);


let pessoa2: [nome: string, idade: number] = ['Rafael', 18]; //Outra maneira de se utilizar a tupla.
console.log(pessoa2);

let listaFrutas2: [number, boolean, ...string[]] = [4, true, ...listaFrutas]; //Podemos adicionar valores de outras tuplas dentro de uma nova tupla.
console.log(listaFrutas2);


function listarPessoas(nomes: string[], idades: number[]){ //Podemos notar que o sinal de [] diferencia a tupla de um tipo de função.
    return [...nomes, ...idades];
};
console.log(listarPessoas(['Rafael Menezes', 'Qualquer outro'], [18, 12]));


//Basicamente criamos um tipo de tupla que pode ser usada de duas formas, como segundo nome ou sem. Podemos entender que type = 'ou'.
type Nome = |[primeiroNome: string, sobrenome: string] |[primeiroNome: string, segundoNome: string, sobrenome: string];
let NomeCompleto: Nome = ['Rafael', 'da Gloria', 'Menezes'];
let NomeSobrenome: Nome = ['Rafael', 'Menezes'];

console.log(`Type 2 = ${NomeSobrenome}. \nType 1 = ${NomeCompleto}`);