//O laço for in interaje sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

let obj1 = {a:1, b:2, c:3};

for(let prop in obj1){ //O let pode ser declarado fora do laço e para ele ser usado com o obj, o obj não pode ser const.
    console.log(`obj1.${prop} = ${obj1[prop]}`);
};

/*  O laço for in iterage sobre as propriedades de um objeto em uma ordem arbitrária. Se uma propriedade é deletada durante a execução do loop, ela se torna indisponível para ser acessada depois. É recomendável não adicionar, remover ou alterar propriedades novas ao objeto durante a execução do laço.*/

let obj2 = {a:1, b:2, c:3, d:4, e:5};
let prop;

for(prop in obj2){
    delete obj2[prop];
    console.log(obj2);
};