export{};

//função é quase identico ao js o que muda é colocar o tipo do retorno;

function somar(num1: number, num2: number): number{
  return num1 + num2;
};


//Rest parameters e arrow function:

const concatenarPalavras = (...artigo: string[]) :string =>{
  let texto: string = 'A junção das palavras forma: ';

  for (let palavras of artigo){
    texto = `${texto} ${palavras}`;
  };

  return texto;
};

console.log(concatenarPalavras('Bonito', 'Benito', 'Baterá', 'Bateria', 'Bem', 'Baixinho'));


//Optional parameters:

function formulario(nome: string, idade?: number){
  let frase: string = `Olá ${nome}.`
  if(idade) frase += ` Sua idade é de ${idade} anos.`
  console.log(frase);
};
formulario('Arthur');
formulario('Maria', 23);


//Default parameters:

function entrevista(nome: string, idade: number, experiencia: boolean = false){
  console.log(`Sr(a) ${nome}, de ${idade} idade. Sua experiência é ${experiencia}`);
};
entrevista('Rafael', 18);
entrevista('Jonas', 87, true);