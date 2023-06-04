//Podemos dizer que herança é pegar dados de uma classe e colocar em outra.

//Exemplos
class Dev{
    constructor(nome, idade, principalLinguagem){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    };

    saudacao(){
        console.log(`Oi! Sou dev Front end, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`);
    };
};

const dev = new Dev("Pedro", 25, "JavaScript");

console.log(dev);
dev.saudacao();



class FrontendDev extends Dev{//extends indica que o nome anterior(FrontendDev) é filho do nome posterior(Dev).
    constructor(nome, idade, principalLinguagem, frameWork){
        super();//O super pega os dados do elemento pai(Dev).
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.frameWork = frameWork;
    };

    saudacao(){
        console.log(`Oi! Sou dev Front end, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`);
    };
};

class BackendDev extends Dev{//extends indica que o nome anterior(BackendDev) é filho do nome posterior(Dev).
    constructor(nome, idade, principalLinguagem, bancoDeDados){
        super();//O super pega os dados do elemento pai(Dev).
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.bancoDeDados = bancoDeDados;
    };

    saudacao(){
        console.log(`Oi! Sou dev Back end, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}.\n\n`);
    };
};


const frontend1 = new FrontendDev("Pedro", "35", "JavaScript", "React");
const backend1 = new BackendDev("João", 24, "c#", "SQL Server");

console.log(frontend1);
frontend1.saudacao();

console.log(backend1);
backend1.saudacao();