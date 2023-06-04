const minhaF = function (){
    console.log("Expressaão de função");
};

function minhaF2(){
    console.log("Declaração de função");
};

const arrowF = () => console.log("função arrow");

minhaF();
minhaF2();
arrowF();

//As arrows functions são uma expressão de função anonima.
//Podemos usar uma linha de código apenas, o return é automático.

const arrowFReturn = (x1, x2) => x1 * x2; //return automático, não precisa colocar o "return".

console.log(arrowFReturn(9,7));

//O this delas se liga ao escopo onde elas foram declaradas.
//Abaixo podemos ver o compartamento de uma arrow function em diferentes escopos.

const obj = {
    prop: "string",
    objArrowF: () => console.log(this) //Este this se refere ao objeto global.
}

obj.objArrowF();

const obj2 = {
    prop: "string",
    fEscopo2: function(){
        (() => console.log(this))() //Este this se refere ao obj2
    }
};

obj2.fEscopo2()