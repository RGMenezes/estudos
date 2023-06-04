//Recursão é um método de resolução de problemas, geralmente matemáticos, que consiste em quebrar o problema em micros problemas e repetir esse processo até que ele possa ser resolvido trivialmente.

//Resolvendo problema sem recursão.
let soma = 0;
for (let index = 1; index <= 5; index++) {
    soma += index;
};
console.log(soma);


//Resolvendo o mesmo problema de forma recursiva.
function somaRecursiva(n){
    if (n===1) return 1; //Critério de parada, caso não exista entramos em um loop infinito, sempre o use!!!!
    return n + somaRecursiva(n-1); //Podemos observar que um loop é criado e ele faz com que o n vá até o número do critério de parada e volte somando em cadeia até a primeira chamada da função.
};
console.log(somaRecursiva(5));


//Exemplos:
//Contagem regressiva.
function timeout(numero){
    return new Promise((resolve) => setTimeout(() => resolve(numero), 1000)); 
};

async function contagemRegressiva(numero){
    if(numero <= 0) return console.log("Feliz ano novo!!!");
    console.log(await timeout(numero));
    return contagemRegressiva(numero - 1);
};

contagemRegressiva(10);


//Fatorial.
function fatorial(n){
    if(n===1) return 1;
    return n* fatorial(n-1);
};
console.log(fatorial(5));