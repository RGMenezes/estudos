//Checando se uma objeto é imutável.

Object.isExtensible(); //Verifica se o objeto é extensivel.
Object.isSealed() //Verifica se o objeto é selado.
Object.isFrozen() //Verifica se o objeto é frozen.
//O retorno pode ser TRUE ou FALSE.

const obj1 = {a:1234, b:"asdf"};
console.log(Object.isExtensible(obj1)); //obj1 é extensivel? TRUE.
Object.preventExtensions(obj1);
console.log(Object.isExtensible(obj1)); //obj1 é extensivel? FALSE.

const obj2 = {a:1234, b:"asdf"};
console.log(Object.isSealed(obj2)); //obj1 está selado? FALSE.
Object.seal(obj2);
console.log(Object.isSealed(obj2)); //obj1 está selado? TRUE.

const obj3 = {a:1234, b:"asdf"};
console.log(Object.isFrozen(obj3)); //obj1 está frozen(congelado)? FALSE.
Object.freeze(obj3);
console.log(Object.isFrozen(obj3)); //obj1 está frozen(congelado)? TRUE.