/*O object array do JavaScript é um objeto global usado na construção de 'arrays': objeto de alto nível semelhantes a listas.*/

//criando arrays
//Forma literal

let arrayFrutos = [];

//Usando new (operador construtor)
//O operador new cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (built-in) que possuem uma função construtora.
let arrayFrutos1 = new Array("Maça", "Banana");
let arrayFrutos2 = new Array(10); //número de posições/incices que terá o array

//Array denso
const arrayDenso = [1,2,3,4,5,6];

//Array esparso
const arrayEsparso = [1,,,3];

//Tornando-o esparso por meio de inserção posterior
arrayEsparso[10] = 10;

console.log(`arrayFrutos ${arrayFrutos}.\narrayFrutos1 ${arrayFrutos1}.\narrayFrutos2 ${arrayFrutos2}.\narrayDenso ${arrayDenso}.\narrayEsparso ${arrayEsparso}.`);

debugger