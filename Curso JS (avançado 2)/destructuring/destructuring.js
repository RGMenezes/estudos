//Podemos dizer que Destructuring é extrair valores e saparalos. Geralmente colocando-os em variáveis.

//Exemplos
const foo = ["um", "dois", "três"];

const [um, dois, tres] = foo;

console.log(um);
console.log(dois);
console.log(tres);
//Podemos notar que foi praticamente uma inversão se comparar-mos as duas constantes, como uma desestruturação.

let a, b, c;
[a,,c] = [1,2,3,4];

console.log(a);
console.log(b);
//Percebemos que o 2 e o 4 não são atribuidos a uma variével e que o b continua sendo undefined.

[a=5, b=7, c=10] = [1, undefined, 3];

console.log(a);
console.log(b);
//Percebemos que podemos colocar um valor default, tipo um reserva, para caso não tenha um valor para aquela variável.

a = 1;
b = 3;

[a, b] = [b, a];

console.log(a,b);
//Podemos trocar/inverter valores de variáveis sem o auxílio de uma outra.

const [a2, ...b2] = [1,2,3];

console.log(a2, b2);
//usando destruturing com rest parameters.

const o = {p:42, q:true};
const {p,q} = o;

console.log(p,q);
//Podemos desestruturar objetos assim como arrays.

({a,b} = {a:1, b:2}); //Desestruturação de objeto.

console.log(a, b);
//É necessário a utilização dos () para que o JS entenda que averá uma desestruturação e não que o {} é um bloco de código.

const {p: fo, q: bar} = o;

console.log(fo, bar);
//Podemos usar o nome da propriedade, assim como no objeto original, e colocar um nome que representará, igual a uma variável, o valor da propriedade do objeto.

({a=10, b=5} = {a:3});

console.log(a,b);
//Desestruturando um obejto, porém tem um valor default para caso o objeto não tenha a propriedade.

const metadata = {
    title: "strachpad",
    translations:[
        {
            locale: "de",
            localization_tags: [],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/tools/scratchpad",
            title: "JavaScript-Ungebung"
        }
    ],
    url: "/en-US/docs/tools/scratchpad"
};

const {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
console.log(englishTitle, "\n", localeTitle);
//Podemos observar que o objeto foi desestruturado e os valores returados dele receberam nomes para uma melhor utilização.

function userId({id}){
    return id;
};

function whois({displayName: displayName, fullName:{firstName:name}}){
    console.log(displayName + " is " + name);
};

const user = {
    id: 42,
    displayName: "Jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

console.log("UserId: " + userId(user));
whois(user);
//Podemos usar a desestruturação dentro dos parâmetros de uma função, como no exemplo acima.

let key = "z";
let {[key]:foo2} = {z: "bar"};

console.log(foo2);
//Podemos usar uma variável como chave na desestruturação para pegar um valor de um objeto que tenha uma propiedade igual a chave.