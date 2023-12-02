//Não contém valores. 
//Não podemos atribuir valores ao tipo: never.
//Retorno de função que gera erro. 
//never != void.

function error(message: string): never {
    throw new Error(message);  
};
console.log(error('Erro de mensagem!'))