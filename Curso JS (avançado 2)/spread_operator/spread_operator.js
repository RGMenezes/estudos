//O spread operator espalha os elementos de um array em parâmetros.

//Exemplo:
const listaNumeros = [1,2,3];

const somaTresNumeros = (num1,num2,num3) =>{
    return num1 + num2 + num3;
};
console.log(somaTresNumeros(...listaNumeros)); //(...) indicador spread, (listaNumeros) Array.
//Podemos notar que spread operetor é parecido com rest parameters só que usado na chamada da função.


//Podemos conectar 2 arrays usando Spread Operator
const listaNumeros1 = [1,2,3];
const listaNumeros2 = [4,5];

const listaNumerosTotal = [...listaNumeros1, ...listaNumeros2];

console.log(listaNumerosTotal);


//Podemos clonar objetos
const objeto = {a:1, b:1};
const objetoCopy = {...objeto};
console.log(objetoCopy);


//Podemos concatenar dois objetos e ainda adicionar uma nova propriedade.
const obj1 = {a:1, b:1};
const obj2 = {prop1:1, prop2:2};

const objCopy = {...obj1, abc:123, ...obj2};

console.log(objCopy);


//obs.: Existe outras inumeras utilizações dos spreads operators, podemos ver todos no site da mozilla.