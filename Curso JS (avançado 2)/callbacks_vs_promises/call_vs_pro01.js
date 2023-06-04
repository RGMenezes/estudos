//Obs.: Antigamente se usava callbacks, já hoje em dia usamos promise, porém podemos usar os dois juntos.

//Apenas callbacks

const statusPantera = "feliz";
function isPanteraFeliz(callback, errorCallback){
    switch(statusPantera){
        case "feliz":
            callback({
                mensagem:"FELIZ"
            });break;

        case "entediado":
            errorCallback({
                mensagem:"ENTEDIADO"
            });break;

        case "triste":
            errorCallback({
                mensagem:"TRISTE"
            });break;

        default:
            errorCallback({
                mensagem: "EMOCIONALMENTE INDEFINIDO"
            });
    };
};

isPanteraFeliz(
    (response) => console.log(`Tudo certo. O gato está ${response.mensagem}`),
    (error) => console.error(`Deu ruim... O gato está ${error.mensagem}`)
);
//Ao usar callbacks, podemos perceber acima que é declarado como parâmetro uma função com um parâmetro.


//Usando Promises
const statusPantera2 = "feliz";
const isPanteraFeliz2 = new Promise((resolve, reject) => {
    switch(statusPantera2){
        case "feliz":
            resolve({
                mensagem:"FELIZ"
            });break;

        case "entediado":
            reject({
                mensagem:"ENTEDIADO"
            });break;

        case "triste":
            reject({
                mensagem:"TRISTE"
            });break;

        default:
            reject({
                mensagem: "EMOCIONALMENTE INDEFINIDO"
            });
    };
});

isPanteraFeliz2.then( (response) => {
    console.log(`Tudo certo. O gato está ${response.mensagem}`);
}).catch( (error) => {
    console.error(`Deu ruim... O gato está ${error.mensagem}`)
});
// Já no then, é o mesmo processo que já vimos anteriormente, apesar de não ter o finally(que não é obrigatório)



//Encadeamento de then
isPanteraFeliz2.then((response) => {
    console.log("No primeiro then");
    return{mensagem: `${response.mensagem}`};
}).then((response) => {
    console.log("No segundo then");
    return{mensagem: `O gato está ${response.mensagem}`};
}).then((response) => {
    console.log("No terceiro then");
    console.log(`mensagem: Tudo certo. ${response.mensagem}`);
}).catch((error) => {
    console.error(`Deu ruim... O gato está ${error.mensagem}`);
});



//Usando catch antes do último then
isPanteraFeliz2.then((response) => {
    console.log("No primerio then");
    return {mensagem: `${response.mensagem}`};
}).then((response) => {
    throw new Error("Deu Erro!!!"); //Força um erro.
}).catch((error) => {
    console.error(`\n${error.message}`)
}).then((response) => {
    console.log("No terceiro then");
    console.log (`mensagem: ${response.mensagem}`);
}).catch((error) => {
    console.error(`Deu ruim... O gato está ${error.mensagem}`);
});