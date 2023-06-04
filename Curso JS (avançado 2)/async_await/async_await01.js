/* Para usar-mos o await(que obriga o JavaScript a esperar o resultado) temos que colocar a chamada da função(promise) dentro de uma função Async. Essa dupla faz com que tenhamos a liberdade de controlar a ordem em que o JavaScript executa os códigos */


//Exemplo

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise cinco mil resolvida"), 5000);
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise mil resolvida"), 1000);
});

const quinhentos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise quinhentos resolvida"), 500);
});

const cem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise cem resolvida"), 100);
});

const resolvedoraDePromisesAssincronas = async () => {
    const resultad1 = await cincoMil();
    console.log("código aqui 1");
    console.log("código aqui 2");
    console.log("código aqui 3");
    const resultad2 = await quinhentos();
    console.log("outro código aqui");
    const resultad3 = await cem();
    console.log("outro código aqui");
    const resultad4 = await mil();

    console.log(`mensagens:\n${resultad1}\n${resultad2}\n${resultad3}\n${resultad4}`);

};


resolvedoraDePromisesAssincronas();

//Podemos notar que o código avança na medida em que as promises sejam completadas, fazendo com que o código fique em ordem e evitando erros.