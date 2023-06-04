//Funções construtoras
//Usadas para construir objetos (apensar de não ser uma regra, iniciamos a função construtora com letra Maiúcula)



//A palavra this aponta para o objeto que será construido

function Ventilador(velMax){
    this.velocidadeMaxima = velMax;
    this.ligado = false;
};




//Instâncias
//Criamos uma instância apartir da palavra reservada new
//Uma instância de uma classe é um novo objeto criado dessa classe, com o operador new. Instanciar uma classe é criar um novo objeto do mesmo tipo dessa classe. Uma classe somente poderá ser utilizada após ser instanciada.

const ventilador1 = new Ventilador(3);

console.log(ventilador1.velocidadeMaxima);



//Adivionando um método por meio do Protótipo para que seja aplicado a todos os objetos

function liga(){
    this.ligado = true;
};

Ventilador.prototype.ligar = liga;

debugger