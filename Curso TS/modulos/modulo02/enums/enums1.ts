//Para que serve os enums?

//Enumerar valores;
//Estruturas de dados não ordenadas;
//Mapeiam chaves para valores;
//Suporta enums numéricos e baseados em string;

enum nome {
    Heitor,
    David, 
    Mary
};

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
enum Idioma{
    Portugues,
    Espanhol,
    Ingles,
    Frances
};

//String
enum IdiomaSigla{
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Ingles = 'EN',
    Frances = 'FR'
};

console.log(`Enum: \nNumeric = ${Idioma[0]}. \nString = ${IdiomaSigla.Portugues}`);

//Pode se notar a semelhança com Array e Object.