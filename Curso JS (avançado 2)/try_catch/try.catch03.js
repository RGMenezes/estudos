//try e catch aninhado

//Podemos observar que vários níveis de try e catch se assemelha muito com try e catch aninhado.

//Usando níveis
const funcao1 = () => {
    try{
        funcao2();
    }catch(error) {
        console.error(error);
        throw error;
    };
};

const funcao2 = () => {
    try{
        funcao3();
    }catch(error) {
        console.error(error);
        throw error;
    };
};

const funcao3 = () => {
    try{
        throw new Error("Deu erro na função 3");
    }catch(error) {
        console.error(error);
        throw error;
    };
};

const main = () => {
    try{
        funcao1();
    }catch (error) {
        console.error(error);
    };
    console.log("Passou por aqui");
};

main();



//Usando aninhamento
const main2 = () => {  //Situação não praticavel
    try{
        try{
            try{
                try{
                    throw new Error("Deu erro");
                }catch (error){
                    console.error(error);
                    throw error;
                };
            }catch (error){
                console.error(error);
                throw error;
            };
        }catch (error){
            console.error(error);
            throw error;
        };
    }catch (error){
        console.error(error);
    };
    console.log("Passou por aqui")
};

main2();


const main3 = () => { //Situação praticavel
    try{
        try{

        }catch (error) {
            console.error(error);
        };
        try{

        }catch (error) {
            console.error(error);
        };
    }catch (error) {
        console.error(error);
    };
    console.log("Passou por aqui");
};

main3();


//Dica: A melhor forma de utilizar try e catch é dentro dos módulos/funções para que fiquem separados e organizados. Ajuda a evitar erros e bugs.