"use strict";
//Para que serve os enums?
//Enumerar valores;
//Estruturas de dados não ordenadas;
//Mapeiam chaves para valores;
//Suporta enums numéricos e baseados em string;
var nome;
(function (nome) {
    nome[nome["Heitor"] = 0] = "Heitor";
    nome[nome["David"] = 1] = "David";
    nome[nome["Mary"] = 2] = "Mary";
})(nome || (nome = {}));
;
//Por que devemos usar enums?
//Facilidade em enumerar valores;
//Reduz erros;
//Funciona somente em tempo de compilação;
//O tempo de execução(compile-time) será mais preciso e rápido;
//Permite criar constantes;
//Permite criar constantes personalizadas;
//Enums TypeScript = Numeric Enums e String Enums.
//Exemplos:
//Numeric
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
//String
var IdiomaSigla;
(function (IdiomaSigla) {
    IdiomaSigla["Portugues"] = "PT-BR";
    IdiomaSigla["Espanhol"] = "ES";
    IdiomaSigla["Ingles"] = "EN";
    IdiomaSigla["Frances"] = "FR";
})(IdiomaSigla || (IdiomaSigla = {}));
;
console.log(`Enum: \nNumeric = ${Idioma[0]}. \nString = ${IdiomaSigla.Portugues}`);
//Pode se notar a semelhança com Array e Object.
