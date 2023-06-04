//Métodos de string

//Métodos de ações

let stringTranformada;

const umaString = " Essa é uma string de teste do canal brasilianDev. ";

stringTranformada = umaString.repeat(3); //Repete a string de acordo com o número do parâmetro.
console.log(stringTranformada);

stringTranformada = umaString.concat("Uma outra string qualquer"); //Concatena uma string na outra.
console.log(stringTranformada);

stringTranformada = umaString.replace("Essa", "Isto"); //Substitui uma parte da String por outra (podemos usar regexp).
console.log(stringTranformada);

stringTranformada = umaString.slice(0, 5); //Fatia a string usando um índice inicial e um final.
console.log(stringTranformada);

stringTranformada = umaString.split(' '); //Reparte a string em um array de acordo com a regra estabelecida no parâmeto.
console.log(stringTranformada);

stringTranformada = umaString.substring(0, 5); //Cria uma substring a partir da original usando um indice inicial e um final, Parecido com o .slice.
console.log(stringTranformada);

stringTranformada = umaString.toLocaleLowerCase(); //Transforma todas as letras maiusculas em minusculas.
console.log(stringTranformada);

stringTranformada = umaString.toLocaleUpperCase(); //Transforma todas as letras minusculas em maiusculas.
console.log(stringTranformada);

stringTranformada = umaString.trim(); //Corta os espaços das extremidades.
console.log(stringTranformada);

stringTranformada = umaString.trimStart(); //Corta o espaço do começo da string.
console.log(stringTranformada);

stringTranformada = umaString.trimEnd(); //Corta o espaço do final da string.
console.log(stringTranformada);