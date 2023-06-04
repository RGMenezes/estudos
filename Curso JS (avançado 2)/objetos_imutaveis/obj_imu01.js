//Um objeto imutável é aquele em que nada dele poderá ser alterado, para isso usamos três métodos Object.preventExtensions(), Object.seal() e Object.freeze().

//preventExtensions
const obj1 = {};
obj1.a = 1234;
Object.preventExtensions(obj1);
obj1.b = 1243;
console.log(obj1);
//Como o próprio nome diz, este método não deixa adicionar novas propriedades, mas podemos deletar e reatribuir as propriedades existentes no objeto.


//freeze
const obj2 = {};
obj2.a = 1234;
Object.freeze(obj2);
obj2.a = 1234; //Isso não irá acontecer!
console.log(obj2);
//O freeze impede qualquer alteração no objeto, deixando-o "congelado".


//seal
const obj3 = {};
obj3.a = 1234;
Object.seal(obj3);
obj3.a = 123456; //Isso irá acontecer!
console.log(obj3);
//O seal faz com que não seja possível deletar uma propriedade ou adicionar uma nova, porém podemos reatribuir propriedades já existentes.


//Obs.: Se tiver uma propriedade atribuida a um objeto dentro de um objeto, mesmo com freeze, as propriedades deste objeto interno poderão ser alteradas, chamamos isso de SHALLOW FREEZE.
//Podemos deixar os obejtos mais imutáveis usando uma função recursiva que coloca freeze em todos os objetos internos, chamamos isso de DEEP FREEZE, porém mesmo assim não é 100% imutavel.