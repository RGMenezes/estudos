/* Callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. */


//Exemplo 1
const saudacao = (nome) => console.log("Olá " + nome);

const processaEntradaUsuario = (callBack) => {
    const nome = "Rafael Menezes"
    callBack(nome);
};

processaEntradaUsuario(saudacao);


//Exemplo 2
const somar = (x, y) => x + y;
const calcular = (x,y,computar) => computar(x,y);

const resultado = calcular(20,123,somar);

console.log(resultado);



//Exemplo 3
const arr = [1, 2, 3];
 
const newArr = arr.map(x => x * x); //Alguns métodos podém receber funções callbacks

console.log(newArr);