//Métodos de strings

//Comparação e Verificação

String.prototype.match(); //retorna array. Um objeto de expressão regular. Se regexp não for RegExp, o mesmo será convertido para uma nova RegExp usando new RegEpx(regexp).
//Se não fornecer um parâmetro retorna um array vazio.

//No caso abaixo o .match() é usado para retornar a expressão regular
const str = "Para maiores informações, veja o capítulo 3.4.5.1";
const re = /(capítulo \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);


//Podemos também usalo para fazer buscas na String
const str1 = "NaN significa 'não é um número'. Infinity contém -Infinity e +Infinity em JavaScript.", str2 = "Meu avõ tem 65 anso e minha avô tem 63." , str3 = "O contato foi declarado null (nulo) e void (sem efeito).";

console.log(str1.match("número")); //número é uma string. Retorna ["número"].
console.log(str1.match(NaN)); //o tipo de NaN é um número. Retorna ["NaN"].
console.log(str1.match(Infinity)); //o tipo de Infinity é um número. Retorna["Infinity"].
console.log(str1.match(+Infinity)); //retorna ["Infinity"].
console.log(str1.match(-Infinity)); //retorna ["-Infinity"].
console.log(str2.match(65)); //retorna ["65"].
console.log(str2.match(+65)); //um valor com sinal positivo. Retorna ["65"].
console.log(str3.match(null)); //retorna ["null"].





String.prototype.search(); //Retorna o índice na string do primeiro trecho que satisfaz a expressão regular. Do contrário, o valor -1 será retornado.
//Um objeto contendo uma expressão regular. Se um objeto obj for passado como parâmetro e não for do tipo RegExp, ele será implicitamente convertido para uma regexp atravéz da instrução new regexp(obj).

const found2 = str.search(re);

console.log(found2);

console.log(str1.search("número"));
console.log(str1.search(NaN));
console.log(str1.search(Infinity));
console.log(str1.search(+Infinity));
console.log(str1.search(-Infinity));
console.log(str2.search(65));
console.log(str2.search(+65));
console.log(str3.search(null));

//Como podemos observar, o retorno do método .search() corresponde ao indice do parâmetro procurado.

//A diferença entre o .match() e o .search() é que enquanto .match() retorna um array(objeto de expressão regular) do valor pesquisado o .search() retorna o index deste valor.


String.prototype.matchAll(); //Faz basicamente o mesmo que .match(), porém com algumas diferenças.


//Outros métodos de comparação e verificação
const stringDeTeste = "Essa é uma string de teste do canal do Paulo Raoni brasiliandev. Se inscreva no canal!!!";


console.log(stringDeTeste.startsWith("Essa")); //Verifica se começa ou não com o valor descrito, retornando true ou false. Podemos alterar a posição inicial colocando mais um parâmetro.

console.log(stringDeTeste.endsWith("uma", 10)); //Modifica o tamanho da string, no caso ira ter 9 caracteres, e verifica qual a última palavra dessa nova string. Retorna true ou false.

console.log(stringDeTeste.includes("brasiliandev")); //Verifica se o valor está incluído na string.

console.log(stringDeTeste.indexOf("e")); //Traz o indice/posição do valor procurado.

console.log(stringDeTeste.lastIndexOf("!")); //O mesmo do de cima, porém ele considerá o último elemento do parâmetro e não o primeiro como o de cima, por exemplo: 'Olá !!!!', nesta frase o retorno seria 7 que é o index do ultimo '!'. Lembrando que o indice começa do 0 e não do 1.

console.log(stringDeTeste.valueOf()); //Retorna o valor primitivo.

console.log(stringDeTeste.charCodeAt(0)) //Procura qual o valor do indice descrito como parâmetro. retorna o charcode(o mesmo que unicode) do valor encontrado.

console.log(String.fromCharCode(69)); //Faz o processo inverso do anterior, colocan-mos o charcode como parâmetro para retornar o caractere desse charcode.