/*Classes são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.*/

//Sintaxe

class NomeClasse{
    constructor(){

    };
};


//Exemplo
class Carro {
    constructor(nome, ano){
        this.nome  = nome;
        this.ano = ano;
    };
};

const carro1 = new Carro("Audi", 2020);
const carro2 = new Carro("Ferrari", 2010);

console.log(carro1,carro2)