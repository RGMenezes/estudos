//Todos os valores que não são primitivos. 
//Melhor forma de representar dados. 
//Podem ser anônimos. 
//Ou também... Ser nomeados. 

const pessoa = {
  nome: 'Rafael', 
  sobrenome: 'Menezes',
  idade: 18,
  funcao: 'Web Developer'
};
console.log(pessoa);


//Object como parâmetros de função(podem ser anônimos):

function onboarding1(funcionario: {nome: string}) {
  return 'Olá ' + funcionario.nome + '!';
}; 

console.log(onboarding1({nome: 'Rafael'}));


//Objects nomeados:

interface Pessoa{
  nome: string; 
  funcao: string;
};

function onboarding2(pessoa: Pessoa) {
  return(`Seja bem-vindo(a) ${pessoa.nome}, você desenpenhará a função de ${pessoa.funcao}.`);
};

console.log(onboarding2({nome: 'Tobias', funcao: 'Eletricista'}));


//Object como type alias: 

type Pessoa3 = {
  nome: string;
  idade: number; 
  funcao: string;
};

function onboarding3(pessoa: Pessoa3) {
  return(`Seja bem-vindo(a) ${pessoa.nome} de ${pessoa.idade} anos, você desenpenhará a função de ${pessoa.funcao}.`);
};

console.log(onboarding3({nome: 'Tobias', funcao: 'Eletricista', idade: 24}));


//Usando optional no object: 

interface Pessoa4{
  nome: string; 
  funcao: string;
  linguagem: string; 
  email?: string; //O (?) indica que informar o valor desse campo é opcional.
};

function onboarding4(pessoa: Pessoa4) {
  if(pessoa.email) console.log(`É opcional: ${pessoa.email}`);
  return(`Seja bem-vindo(a) ${pessoa.nome}, você desenpenhará a função de ${pessoa.funcao} utilizando ${pessoa.linguagem}.`);
};

console.log(onboarding4({nome: 'Laura', funcao: 'Mobile Developer', linguagem: 'Kotlin', email: 'lourinhaKotlin@developer.mobile'}));


//Propriedade 'readonly'(se deseja proibir que os devs não modifiquem um determinado objeto):

interface Pessoa5{
  nome: string; 
  funcao: string;
  linguagem: string; 
  readonly email: string; //Em tempo de execução o valor não pode ser alterado
};

function onboarding5(pessoa: Pessoa5) {
  //pessoa.email = "nada"; //O erro acontece por conta do 'readonly'
  if(pessoa.email) console.log(`Testando alteração: ${pessoa.email}`);
  return(`Seja bem-vindo(a) ${pessoa.nome}, você desenpenhará a função de ${pessoa.funcao} utilizando ${pessoa.linguagem}.`);
};

console.log(onboarding5({nome: 'Laura', funcao: 'Mobile Developer', linguagem: 'Kotlin', email: 'lourinhaKotlin@developer.mobile'}));


//Tipos de extenções(heranças):

interface Mae{
  nome: string;
};

interface Pai{
  sobrenome: string;
};

interface Filha extends Mae, Pai{
  idade: number;
};

const filha: Filha = {
  nome: 'Moura',
  sobrenome: 'Lopez',
  idade: 34
};

console.log(filha);


//Tipos de interseções: 

interface Cachorro{
  raça: string;
  latindo: boolean;
};

interface Gato{
  raça: string;
  miando: boolean;
};

type Animal = Cachorro & Gato;

const animal: Animal = {
  raça: 'Boder Colier',
  latindo: true,
  miando: false
};

console.log(animal);


//Generic Objects: 

type Usuario = {
  nome: string;
  email: string;
};

type Admin = {
  nome: string;
  email: string;
  admin: boolean;
};

const usuario: Usuario = {
  nome: 'Rafael',
  email: 'faelgmp@gmail.com'
};

const admin: Admin = {
  nome: 'Rafael',
  email: 'faelgmp@gmail.com',
  admin: true
};

function acessarSistema<T>(usuario: T): T { // (<>) Simbulo generics.
  return usuario;
};

//O usuário poderá ser admin ou normal na mesma função.
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));


export{};