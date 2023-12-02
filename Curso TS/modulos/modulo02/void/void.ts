//Quando a função não retorna nenhum valor. 
//Tipo void é oposto do tipo Any.
//Melhora a clareza do código.
//Garante a segunrança de tipo.

//Any = ausência de tipo.

function olaMundo(): void {
    console.log('Olá mundo!');
    //Função sem retorno.
};
olaMundo();


let variavelTeste: void = undefined; //Void só recebe undefined.

variavelTeste = 1; //Apresenta erro.
variavelTeste = null //Sem erro se habilitar como false 'strictNullChecks'.