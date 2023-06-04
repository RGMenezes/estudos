//memoization é uma técnica de otimização que tornam as aplicações mais eficientes e mais rápidas.
//Ela consiste em armazenar os resultados da computação em cache e recuperar essas informações na próxima vez em que elas forem acessadas em vez de computar novamente.
//Consiste em armazenar em cache a saída de uma função pura, onde uma chamada com os mesmos argumentos sempre vão gerar um mesmo resultado.

//Funções puras são aquelas que dado um input, o output sempre será o mesmo.

//Memoization se baseia em dois conceitos, closures e funções de auta ordme/primeira classe.
//Função First-class(primeira classe) é quando a função é tratada como qualquer outra variável. Por exemplo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.

//Exemplo sem memoization.
const fib = (n) =>{
    if(n<=1) return 1;
    return fib(n-1) + fib(n-2);
};
//Observamos aqui uma função que gera uma sequência de fibonate de acordo com o número dado.
console.log(`fib: ${fib(40)}`);
console.log(`fib: ${fib(40)}`);
console.log(`fib: ${fib(40)}`);
console.log(`fib: ${fib(40)}`);
//Podemos ver que o cálculo demora para aparecer.


//Exemplo com memoization.
const memo = {};
const fib2 = (n, memo) => {
    if(memo[n]) return memo[n];
    if(n<=1) return 1;
    return memo[n] = fib2(n-1, memo) + fib2(n-2, memo);
}
console.log(`\nfib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
console.log(`fib2: ${fib2(40, memo)}`);
//Podemos ver que o cálculo usando memoization é quase instantâneo pq o resultado fica salvo no objeto(memo).