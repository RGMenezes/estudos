//Usando herança sem usar classes

const Dev = function(nome, idade, principalLinguagem, tipoDeDev){
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.tipoDeDev = tipoDeDev;

    this.saudacao = function(){
        console.log(`Oi! sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}. \n\n`);
    };
}

const FrontendDev = function(nome, idade, principalLinguagem, frameWork){
    const newDev = new Dev(nome, idade, principalLinguagem, "Frontend");
    newDev.frameWork = frameWork;
    Object.setPrototypeOf(this, newDev);
}

const BackendDev = function(nome, idade, principalLinguagem, bancoDeDados){
    const newDev = new Dev(nome, idade, principalLinguagem, "Backend");
    newDev.bancoDeDados = bancoDeDados;
    Object.setPrototypeOf(this, newDev);
}

const frontend1 = new FrontendDev("Pedro", 35, "JavaScript", "React");
const backend1 = new BackendDev("João", 24, "c#", "SQL Server");

console.log(frontend1);
frontend1.saudacao();

console.log(Object.getPrototypeOf(backend1)); //Retorna o prototype do backend1
backend1.saudacao();

/* Podemos notar que a principal alteração em relação ao uso de classes é que o comando class é trocado por const + função anonima e que temos que prototypar o objeto filho com o objeto pai usando Object.setPrototypeOf(this, nome objeto pai) */