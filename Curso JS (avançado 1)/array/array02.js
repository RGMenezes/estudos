//Métodos de Arrays

const meuArrayLiteral = [1,2,3];
const meuArrayConstructorInstance = new Array(1,2,3);
const meuArrayConstructorCall = Array(1,2,3);
const meuArrayFrom = Array.from(meuArrayLiteral);
const meuArraySpread = [...meuArrayFrom]; //Espalha dados em lista.

console.log(`meuArrayLiteral ${meuArrayLiteral}.\nmeuArrayConstructorInstance ${meuArrayConstructorInstance}.\nmeuArrayConstructorCall ${meuArrayConstructorCall}.\nmeuArrayFrom ${meuArrayFrom}.\nmeuArraySpread ${meuArraySpread}.`);




//Inserir e remover elementos das extremidades
const arr = [1];
console.log(arr);

arr.push(2); //Inserir no final.
console.log(arr);

arr.unshift(10); //Inserir no início.
console.log(arr);

arr.shift(); //Remover no início, definir um parâmetro é opcional.
console.log(arr);

arr.pop(); //Remover no final, definir um parâmetro é opcional.
console.log(arr);





//Remover elementos em qualquer ponto
const arrRemoveAnyPoint = [1,2,3];
console.log(arrRemoveAnyPoint);

arrRemoveAnyPoint.splice(1,2); //1 = indice inicial, 2 = quandidade de indices que terão seus valores apagados apartir do 1(indice inicial).
console.log(arrRemoveAnyPoint);




//Preencher um array com valores
const arrPreenchido = new Array(10);
const arrPreenchido2 = new Array(10);

arrPreenchido.fill(5,1); //5 = valor preenchido, 1 = indice inicial.
console.log(arrPreenchido);

arrPreenchido2.fill(5,0,5); //5 = valor preenchido, 0 = indice inicial, 5 = indice final.
console.log(arrPreenchido2);



//Criar um subArray a partir de um array
const arrSubArray = ['Brazilian', 'Developer', 'JavaScript', 'Python', 'node'];
console.log(arrSubArray);

const arrSubArray2 = arrSubArray.slice(2); //"Fatia" o array em outro a partir de um ponto inicial(indice) até um ponto final, que quando não colocado será considerado até o último indice.
console.log(arrSubArray2);




//Ordenar um array
const arrayOrdenado = [2,3,1,10,9,4,5,9,8,0]
console.log(arrayOrdenado);

arrayOrdenado.sort(); //Ordena o array em ordem crescente usando o primeiro algarismo.
console.log(arrayOrdenado);

arrayOrdenado.sort( (a,b) => a - b ); //Ordena o array usando uma function que subtrai dois elementos para decidir quem é o maior e o menor ou igual.
console.log(arrayOrdenado);




//Métodos Filter, Fixed, ForEach, map, reduce
const arrBase = [
    {a: 2, b:2},
    {a: 1, b:2},
    {a: 5, b:2},
    {a: 1, b:2},
    {a: 10, b:2}
];
console.log(arrBase);

const filtered = arrBase.filter(el => el.a > 2); //Filtra o valor até ser encontrando.
console.log(filtered);

const find = arrBase.find(el => el.a == 10); //Retorna o primeiro elemento com base no filtro, caso não encontrado retornar false.
console.log(find);

const forEach = arrBase.forEach(el => console.log(`a: ${el.a}, b: ${el.b}.`)); //Não a retorno, ele faz uma ação para cada elemento.

const maped = arrBase.map(el => el.a += 1); //Mapeia o array e retorna um novo array remapeado.
console.log(maped);

const reduce = arrBase.reduce((acc, curr) => acc + curr.a, 0); //Acumula um valor até o final do array e retorna o valor acumulado(reduz o array a um valor reduzido).
console.log(reduce);