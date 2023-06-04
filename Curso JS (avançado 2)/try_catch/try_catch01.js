//Usamos o try e o cacth para tratar os erros do programa e não deixar o código quebrar.

const main = () =>{
    try{
        //Código
        //Colocamos aqui tudo o que pode dar erro. Aqui o JS tentará executar novamente e se o erro persistir vai pro catch().
    }catch(error){
        console.error(`Deu erro no código. E o erro é esse: \n\n${error}`);
    }finally{ //Sempre será executado. Podemos usá-lo em qualquer código(then/catch).
        console.info(`Esse valor sempre será mostrado.`);
    };
};

main();