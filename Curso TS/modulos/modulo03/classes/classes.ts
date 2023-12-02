export{};

//Você organiza e pensa sobre o código. 
//Unidade primária de encapsulamento. 
//Suporte a: modificadores, inicializadores, polimorfismo, decorators e interfaces.

//Como é feito no JavaScript: 
// function pessoa(nome, sobrenome){
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// };
// pessoa.prototype.nomeCompleto = function(){
//   return `${this.nome} ${this.sobrenome}`;
// };
// let pessoa = new Pessoa('Rafael', 'Menezes');
// console.log(pessoa);


//No ts:

class Pessoa{
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  };

  nomeCompleto():string{
    return `${this.nome} ${this.sobrenome}`;
  };
};

let pessoa = new Pessoa('Rafael', 'Menezes');
console.log(pessoa, pessoa.nomeCompleto());



class Estudante {
  //carteira: boolean; //Dará erro pois não foi iniciolizado.
  codigo: number = 8712; //Podemos usar um valor default para não ocorrer o erro acima.
  nome!: string; //Ou usar o (!) para indicar que em algum lugar do codigo essa propriedade da classe será inicializada.
};
const estudante = new Estudante();

estudante.nome = 'Raul';

console.log(estudante);