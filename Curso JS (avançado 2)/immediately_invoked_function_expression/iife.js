//Sintaxe (função chamada)() ou (função chamada())

(function(){
    console.log("Está função será chamada automáticamente quando o código rodar")
})(); //O () pode estar do lado de dentro

//O IIFE é um padrão de projeto (Self - Executing Anonymous Function), que é dividido em duas grandes partes.

//1º - Função anonima com o escopo lexo fechado dentro de um gruping operator(par de parênteses()), previnindo que os valores dentro da IIFE sejam acessados fora dela(não "poluindo" o ambiente externo).

//2º - A expressão da função é imediatamente invocada por meio do par de parênteses do final (), é por meio dele que o motor do JavaScript vai interpretar a função.

const resultado = (function(){
    const meuNome = "Rafael";
    return meuNome;
})();
console.log(resultado);