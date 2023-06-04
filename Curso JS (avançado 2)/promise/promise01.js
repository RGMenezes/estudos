/* Com o comando new promise() criamos/iteramos um objeto que tem como função apresentar uma conclusão ou falha de uma operaçao assincrona qualquer. 
A operação pode estar concluida, pendente ou falha (pending, fullfiled or resolved, reject)*/

//Criando promise
const umaPromessa = new Promise((resolve, reject) => { //Por padrão usamos os valores resolve e reject.
    let soma = 1 + 3;
    if(soma === 2) 
        resolve("Tudo certo");
    else 
        reject("Deu ruim"); //Podemos ignorar a utilização do reject, porém a promise poderá ficar sempre pendente.
});

console.log("Esperando promise...")


//Retorno promise (podemos usar 3 retornos da promise)
umaPromessa.then((resultado) => { //O then é retornado caso o resultado da promise for resolvido.
    console.log(`Valor do then: ${resultado}`);
}).catch((erro) =>{ //O catch é retornado caso o resultado da promise der falha.
    console.error(`Valor do catch: ${erro}`); //Faz o mesmo que o console.log só que é específico para erros.
}).finally(() => { //Já o finally sempre será executado independente do resultado da promise.
    console.log("Independente do resultado eu sempre estarei aqui!")
});


console.error("Fora de ordem..."); //console.error sendo executado fora da ordem por causa do evently loop.

/* 
Evently loop => É um assinto mais abrangente, mas na promise basicamente o JavaScript executa o retorno das promises no seu segundo loop, o que opde fazer com que, por exemplo, um concole.log seja executado fora da ordem visualizada no código.
*/