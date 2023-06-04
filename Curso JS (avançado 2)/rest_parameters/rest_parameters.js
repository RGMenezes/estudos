//O rest parameters pega todos os parâmetros de uma função, parecido com argumen, porém já no formato de um array.

//Exemplo:
function somaNumerosInfinitamenteV1(...args){ //(...) indicador rest parameters, (args) nome do indicador, tipo variável.
    return args.reduce((acumulador, valorAtual) => acumulador + valorAtual);
};
console.log(somaNumerosInfinitamenteV1(1,2,3,4));


/*
 Prodemos usar os rest parameters dentro de arrows functions, porém não podemos usar mais de um rest parameters e ele precisa ser o último parâmetro. Sim podemos tambem usar os parâmetros normais junto.
 Obs.: Se usarmos parâmetros normais juntos dos rest parameters ele só pega os valores que não tem parâmetros, por isso ele tem que ser o último da lista.
*/

//Exemplo:
const multiplicaPeloPrimeiro = (multiplicador, ...args) => {
    return args.map((num) => multiplicador * num);
};
console.log(multiplicaPeloPrimeiro(2,1,2,3,4));