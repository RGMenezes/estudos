//Podemos trabalhar com async e await e usar then e catch ao mesmo tempo.

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise cinco mil resolvida"), 5000);
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise mil resolvida"), 1000);
});


const resolvedoraDePromisesAssincronas = async () => {
    const resultado1 = await cincoMil().then((res) => {
        console.log(res);
        return res; //Passa o res para o proximo método(no caso o catch)
    }).catch((err) =>{
        console.log(err);
    });

    console.log("Código aqui")

    const resultado2 = await mil().then((res) => {
        console.log(res);
        return res; //Passa o res para o proximo método(no caso o catch)
    }).catch((err) =>{
        console.log(err);
    });
    
    console.log(`\nMensagens:\n${resultado1}\n${resultado2}`);
};

resolvedoraDePromisesAssincronas();