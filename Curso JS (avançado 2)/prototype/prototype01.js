//Prototypes são basicamente uma emulação de herança usando classes. Criando uma espécie de cadeia.

const animal = {
    som: "Um som de animal",
    tipo: "animal",
    emitirSom: function(){
        console.log(this.som);
    }
};

const gato = {
    tipo: "gato",
    som: "miau"
};

Object.setPrototypeOf(gato, animal); //Seta qual é o objeto pai(animal) e qual é o objeto filho(gato).

gato.emitirSom(); //Como este objeto não tem o método emitirsom(), o JavaScript considera o método do elemento pai(animal), setado anteriormente, como se o elemento filho o tivesse "herdado".


const gatoRaivoso = {
    tipo: "gatoRaivoso",
    miarForte: function(){
        console.log(this.som.toUpperCase());
    }
};

Object.setPrototypeOf(gatoRaivoso, gato); //Podemos notar que o elemento pai(gato) era o elemento filho anteriormente, assim a cadeia é formada animal --> gato --> gatoRaivoso.

gatoRaivoso.miarForte();



Object.getPrototypeOf(gatoRaivoso); //Podemos verificar a cadeia de prototypes usando Object.getPrototypeOf(nome do objeto) no debuger.