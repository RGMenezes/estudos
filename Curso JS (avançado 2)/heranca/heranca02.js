//Como já vimos, super() pega os dados do elemento pai, porém podemos usá-lo para construir o elemento filho com o construtor do elemento pai.

//Exemplos

class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDeDev = tipoDeDev;
    };
    saudacao(){
        console.log(`Oi! Sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`);
    };
};



class FrontendDev extends Dev{
    constructor(nome, idade, principalLinguagem, tipoDeDev, frameWork){
        super(nome, idade, principalLinguagem, tipoDeDev);  //Podemos notar que usar o super(com os parâmetros do elemento pai) não precisamos reatribuilos com this.
        this.frameWork = frameWork; //Apenas as novas propriedades precisão ser atribuidas.
    };
};

class BackendDev extends Dev{
    constructor(nome, idade, principalLinguagem, tipoDeDev, bancoDeDados){
        super(nome, idade, principalLinguagem, tipoDeDev);  //Podemos notar que usar o super(com os parâmetros do elemento pai) não precisamos reatribuilos com this.
        this.bancoDeDados = bancoDeDados; //Apenas as novas propriedades precisão ser atribuidas.
    };
};


const frontend1 = new FrontendDev("Pedro", 35, "JavaScript", "Frontend", "React");
const backend1 = new BackendDev("João", 24, "c#", "Backend", "SQL Server");

console.log(frontend1);
frontend1.saudacao();

console.log(backend1);
backend1.saudacao();

//Mesmo o método saudacao() não ter sido declarado na classe filha, ela é lida pois a classe filha pega todas as propriedades da classe pai.