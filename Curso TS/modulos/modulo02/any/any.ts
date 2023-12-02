//Padrinho dos tipos.
//Any é padrão no TypeScript.
//Evitar ao máximo usá-lo, já que seria igual programar em JavaScript.

const a: any = 888;
const b: any = ['perigo'];

const c = a + b; //Erro que deveria acontecer!

console.log(c);


//Quando usá-lo?

const formulario: {[campoForm: string]: any} = {
    nome: 'Rafael',
    masculino: true,
    idade: 18
};

console.log(formulario);

//Objetos com diversos tipos de dados, Porém o tipo unknown é mais indicado.


/*
    Explicação: {[campoForm: string]: any}
    
    {} => Denota que estamos definindo um objeto.
    [compoForm: string] => Define o tipo das chaves(propriedades) do objeto. (objeto.propriedade).
    any = Especifica que as chaves podem receber qualquer valor.
*/