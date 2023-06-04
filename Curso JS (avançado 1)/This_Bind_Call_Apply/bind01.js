//Cria uma nova função que, quando chamada, tem sua palavra chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

function thisBindExemplo(){
    console.log(this)
};

const obj = {
    exemplo: "exemplo"
};

thisBindExemplo = thisBindExemplo.bind(obj); // O this da função será o obj apontado pelo .bind

thisBindExemplo();