//Entende-se que uma linguagem de programação tem função first-class quando suas funções são tratadas como qualquer outra variável. Por exemplo, uma linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornado por outra função e pode ser atribuida como um valor à uma variável.


//Atribuindo uma função à uma variável
const foo = function asd(){
    console.log("foobar.");
};

foo();


//Passar uma função como argumento
function disOla(){
    return "Ola, ";
};

function apresentacao(funcaoMensagemOla, nome){
    console.log(funcaoMensagemOla() + nome);
};

apresentacao(disOla, "JavaScript.");




//Retornando uma função dentro de uma função
function printaBrDev(){
    return function(){
        console.log("BrDev");
    };
};

//Chamando usando variável
const myFunc = printaBrDev();
myFunc();

//Chamando usando parenteses duplo
printaBrDev()();