//Closures são funções declaradas dentro de outra função, criam um fechamento, que é uma forma de uma função dentro de outra função conseguir acessar o que está fora dela (geralmente acima);

//Exemplos
function init1(){
    const nome = "Uma String";
    const mostrarNome = () => console.log(nome);
    mostrarNome();
};
init1();


function init2(){
    const nome = "String";
    const mostrarNome = () => console.log(nome);
    return mostrarNome;
};
const minhaFuncao = init2();
minhaFuncao();
//Podemos observar que mesmo depois de funão init2 ter sido executada antes do mostrarNome o valor(bloco de código de mostrarNome) é executado "separadamente" e ainda consegue pegar a constante nome.


function criarContadora(){
    let contador = 0;
    return function(){
        console.log(contador);
        contador++;
    };
};
const contadora = criarContadora();
contadora();
//Nota-se que mesmo a função estando dentro de outra podemos usala, no caso adicionando um número ao contador, mesmo que ela precise de um valor, no caso variável, que está fora do seu bloco de código.


function soma(num1){
    return(num2) => {
        if(!num2) return num1;
        return soma(num1 + num2);
    };
};
console.log(soma(2)(3)(5)(10)(4)(-1)()); //O () vazio garante que a função de dentro da função será chamada para ter o retorno.
//Observamos que uma sequencia de chamamentos da função soma faz com que num1 pegue o primeiro número do primeiro chamamento, já os posteriores entrão na função retorno que solva seu valor somado no parâmetro num1 chamando de novo a função soma. Isso acontece até que tenha um false valor.