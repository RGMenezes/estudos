//Currying é uma técnica para se trabalhar com vários parâmetros ao mesmo tempo usando várias chamadas de função.


//Função padrão/inicial.
let resultado;

function ehMaior(a,b) {
    return a > b;
};
resultado = ehMaior(2,5);
console.log(resultado);


//Mesma função só que com closure.
let resultado2;

function ehMaiorUsandoClosure(a){
    return function(b){
        return a > b;
    };
};
resultado2 = ehMaiorUsandoClosure(2)(5);
console.log(resultado2);


//Usando currying
let resultado3;

function ehMaiorCurrying(a){
    let comparacao = false;
    return function ehMaiorCurrying2(b){
        if(!b) return comparacao;
        comparacao = a > b;
        a = b;
        return ehMaiorCurrying2;
    };
};
resultado3 = ehMaiorCurrying(2)(5)(1)();
console.log(resultado3);


function soma(num1){
    let acumulador = num1;
    return function soma2(num2){
        if(!num2) return acumulador;
        acumulador += num2;
        return soma2
    };
};
console.log(soma(2)(3)(5)(10)(4)(-1)());