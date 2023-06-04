//O termo "wrapper" em português significa "que envolve". No entando, em tecnologia, é comum se usar a versão em inglês que passui o mesmo significado.

//A exceção do null e do undefined, todos os primitivos tem um objeto wrapper equivalente.



//String para o primitivo string.
//Number para o primitivo number.
//Boolean para o primitivo boolean.
//Symbol para o primitivo symbol.

//O método valueOf() do objeto wrapper retorna o valor primitivo.


//String
const str1 = String("Brazilian Dev1");
const str2 = new String("Brazilian Dev2");

console.log(`str1 ${str1}, str2 ${str2}`);

console.log(`str1 dividida ${str1.split('')}, str2 dividida ${str2.split('')}`); //.split cria um array com cada caractere em um índice.

const str2Convertido = str2.valueOf();

console.log(typeof str2Convertido);

console.log("Brazilian Dev".split(""));//O próprio js transforma a string em um objeto/array, sendo uma melhor maneira de fazê-lo.



//Number
const num1 = Number("1"); //Usável.
const num2 = new Number("2"); //Evite.

console.log(`num1 ${num1}, num2 ${num2}.`);

console.log(`num1 com 2 casas decimais ${num1.toFixed(2)}, num2 com 3 casas decimais ${num2.toFixed(3)}`); //.toFixed() adiciona casas decimais.




//Boolean
const bool1 = Boolean(0); //Não use.         // O 0 e "" é igual a false.
const bool2 = new Boolean(""); //Não use.

console.log(`bool1 ${bool1}, bool2 ${bool2}`);

console.log(`bool1.toString() = ${bool1.toString()}, bool2.toString() = ${bool2.toString()}.`); //.toString retorna em forma de string.

//Nem tudo que existe é para ser utilizado, como por exemplo o eval().