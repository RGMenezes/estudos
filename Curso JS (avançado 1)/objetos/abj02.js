//Métodos de Objetos



//Assign junção de objetos

const destino = {a: 1, b: 2};
const origem = {b: 4, c: 5};

const destinoRetornado = Object.assign(destino, origem); //Faz a junção entre dois ou mais objetos, sendo o primeiro parâmetro o objeto de destino.
console.log(destinoRetornado, destino); //OBS: O primeiro parâmetro é alterado.




//Assing clonagem de objetos
const obj = {a: 15};

const copia = Object.assign({}, obj); //O objeto vazio serve apenas como destido
console.log(obj, copia);




//Assign mesclagem de objetos
const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const obj1 = Object.assign({}, o1, o2, o3); //Mesclagem com um objeto vazio para não modificar os outros objetos.
const obj2 = Object.assign(o1, o2, o3); //mesclagem modificando o primeiro parâmetro.
console.log(obj1, obj2);





//Transformando um array de array em objetos
const arrayDeEntrada = [
    ['abc', 2],
    ['def', 4]
];

const obj3 = Object.fromEntries(arrayDeEntrada); //transforma o array de array em objeto
console.log(obj3);




//Transformando objetos em array
const objetoDeEntrada1 = {
    'abc': 2,
    'def': 4
};

const array = Object.entries(objetoDeEntrada1); //Faz o processo inverso do anterior. Transforma um objeto em um array de array.
console.log(array);




//Array de propreidade e array de valores
const obj4 = {
    100: 'a', 
    2: 'b', 
    7: 'c',
    200: 'd'
};

const keys = Object.keys(obj4); //Cria um array com o nome das propriedades do objeto.
const values = Object.values(obj4); //cria um array com os valores das propriedades do objeto.

console.log(keys, values);