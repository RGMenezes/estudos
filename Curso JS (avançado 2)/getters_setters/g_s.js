//Getters e Setters.

//Cria uma propriedade que retorna um valor já colculado dinanmicamente ou faz uma propriedade que reflita o status de uma variável interna, sem exigir o uso de chamadas explicitas dentro do código.
//Getters e Setters são pseudosPropriedades dentro de um objeto.

const obj = {
    listaString: ["Inscreva-se", "Ative o sino", "Brazilian Dev"],
    get primeiraString(){
        return this.listaString.length ? this.listaString[0] : null;
    },
    set primeiraString(item){
        this.listaString.unshift(item);
    }
};
console.log(obj.primeiraString);
obj.primeiraString = "Deixa um like";
console.log(obj);
//Observa-se que mesmo get e set serem funcitons eles são considerados propriedades. Enquanto o get retorna algo o set insere algo.
//Podemos deletar a propriedade get e set com delete.
//Podemos criar um objeto sem o set(apenas o get), porém não podemos fazer reatribuição.


const obj2 = {a: 0};

Object.defineProperty(obj2, "prop", { //Define/redefine uma propriedade de um objeto.
    get(){ //Define prop como a.
        return this.a;
    },
    set(x){ //redefine a com o valor x.
        this.a = x;
    }
});
console.log("\n", obj2.prop);
obj2.prop = 5;
console.log(obj2);
console.log(obj2.prop);


//Criando uma propriedade computada
//Criando uma propriedade usando o valor de uma variável externa.
const str = "computada";

const obj3 = {
    a:"abc",
    get[str](){ //Computa a propriedade usando uma variável, usa-se [].
        return this.a;
    },
    set[str](novoValor){
        this.a = novoValor;
    }
};
console.log("\n", obj3.computada);
obj3.computada = "xyz";
console.log(obj3, "\n", obj3.computada);


//Definindo Getters e Setters dentro de uma classe.
class Usuario{
    #primeiroNome = "Brazilian"; //Propriedades privadas
    #segundoNome = "Dev";

    get nomeCompleto(){
        return `${this.#primeiroNome} ${this.#segundoNome}`;
    };
    set nomeCompleto(value){
        [this.#primeiroNome, this.#segundoNome] = value.split(" ");
    };
};
const usuario = new Usuario();
console.log("\n", usuario.nomeCompleto);
usuario.nomeCompleto = "Rafael Menezes 1234";
console.log(usuario.nomeCompleto);


//Classe como propriedade privada e estática.
//As propriedades estáticas podem ser acessadas apenas dentro da classe em que são definidas. Eles são invisíveis para instâncias dessa classe. Se você tentar acessar a propriedade estática da instância da classe, o JavaScript retornará undefined .
class ClasseStringTeste{
    static #strInterna = "uma string teste";
    static get str(){
        return this.#strInterna;
    };
    static set str(valor){
        this.#strInterna = valor;
    };
};
console.log("\n", ClasseStringTeste.str);
ClasseStringTeste.str = "Teste de String";
console.log(ClasseStringTeste.str);
console.log(ClasseStringTeste.strInterna);