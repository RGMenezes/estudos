//Níveis de try catch.
//Além de capturar o erro podemos retornalo e ainda tratalo em outro local do código.

const funcao1 = () => {
    console.log("Sou uma função 1")
    const valor = true;

    try{
        if(valor){
            throw new Error("Deu erro no valor"); //new Error criar um erro próprio do código.
            //O throw retorna o erro para o próximo catch.
        };
    }catch(error){
        console.error(error);
        throw error;
    };
};

const funcao2 = () =>{
    console.log("Sou a função 2");
    asdf; //Letras aleatórias para das erro.
};



const main = () => {
    try{
        funcao1(); //Podemos notar que o try retorna apenas o primeiro erro que acontece pro catch.
        funcao2(); //Ex.: caso funcao1 e 2 tivesse erro, apenas a 1 iria pro catch já que ele acontece primeiro.
        console.log("Passou por aqui.");
    }catch (error){ //Próximo catch que recebe o throw.
        console.error(error);
    };
};

main();