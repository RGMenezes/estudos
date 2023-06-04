//Promise.all() vs Promise.race()

//Promise.all() e promise.race() nos permite operar várias promises facilmente.
//Obs.: Podemos passar reject e resolve sem necessáriamente criar uma promise.

const promise1 = new Promise((resolve, reject) => {
    resolve("promise 1 resolvida");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("promise 2 resolvida");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("promise 3 resolvida");
});


//Promise.all() -> resolve todas as promises.

Promise.all([promise1, promise2, promise3]).then((messages) => console.log(messages)); //E esse código fará com que a mensagem do resolve das promises sejam mostradas.


//Promise.race() -> igual ao all(), porém mostra o resultado apenas da primeira promise positiva de acordo com a lista.

Promise.race([promise1, promise2, promise3]).then((message) => console.log(message));


//Obs.: Tanto o all() quanto race(), podemos usar o setTimeout() nas promises para definir quando que o resultado delas irão retornar

const promise1Time = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1 resolvida no tempo"), 1000);
});

const promise2Time = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 2 resolvida no tempo"), 500);
});

const promise3Time = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 3 resolvida no tempo"), 2000);
});


Promise.all([promise1Time, promise2Time, promise3Time]).then((messages) => console.log(messages));

Promise.race([promise1Time, promise2Time, promise3Time]).then((message) => console.log(message));


//Mas como podemos observar, os resultados dependendo do tempo do setTimeout são mostrados na ordem errada. Para consertarmos isso usamos Async e Await.