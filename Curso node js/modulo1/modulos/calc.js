const calc = {
    somar: require("./operacoes/somar.js"),
    subtrair: require("./operacoes/sub.js"),
    multiplicar: require("./operacoes/multi.js"),
    dividir: require("./operacoes/div.js")
    
};

console.log(calc.somar(2, 7));
console.log(calc.subtrair(2, 7));
console.log(calc.multiplicar(2, 7));
console.log(calc.dividir(2, 7));