//Arguments é um parâmetro que fica implicito na função e é parecido com um array.
//Obs.: Só podemos usar arguments usando declaração de função, a forma padrão de criar funções.
//Podemos clonar o arguments em uma variável usando Array.from(arguments) para de fato ter um array com todos os parâmetros dentro de arguments.

//Exemplo1
function somaNumerosInfinitosV1() {
    const args = Array.from(arguments);
    let soma = 0;

    for(let i = 0; i < args.length; i++){
        soma += args[i];
    };
    return soma;
};
console.log(somaNumerosInfinitosV1(1,2,3,4,5));


//Exemplo2
function somaNumerosInfinitosV2(){
    const args = Array.from(arguments);
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual);
};

console.log(somaNumerosInfinitosV2(1,2,3,4,5,5,5,5));

//Obs.: Podemos usar um objeto ou um array como parâmetro caso não queira usar arguments(Que é mais específico do que objetos e arrays).