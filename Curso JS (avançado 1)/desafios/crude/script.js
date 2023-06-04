let listaLinguagem = [];

function apagarLinguagem(linguagem){
    const indiceLinguagem = listaLinguagem.indexOf(linguagem);

    if( indiceLinguagem == -1){
        alert("Linguagem não encontrada no array! " + listaLinguagem);
    }else{
        listaLinguagem.splice(indiceLinguagem, 1);
    };


    const outputLista = document.querySelector("#lista");
    if(listaLinguagem[0] === undefined){
        outputLista.innerHTML = "";
    }else{
        mostrarElementoLista();
    };
};



function mostrarElementoLista(){

    const outputLista = document.querySelector("#lista");

    let cont = 0;
    while (cont != undefined){
        
        if(listaLinguagem[cont] === undefined){
            cont = undefined;

        }else{
            if(cont <= 0){
                outputLista.innerHTML = `<li id="${listaLinguagem[cont]}">${listaLinguagem[cont]} <button onclick="apagarLinguagem('${listaLinguagem[cont]}')" >X</button></li>`;

            }else{
                outputLista.innerHTML += `<li id="${listaLinguagem[cont]}">${listaLinguagem[cont]} <button onclick="apagarLinguagem('${listaLinguagem[cont]}')" >X</button></li>`;

            };
            cont++;

        };

    };
};



function criarElementoLista(linguagem){

    if(linguagem.length > 0){
        listaLinguagem.push(linguagem);

        mostrarElementoLista();

    }else{
        alert("Digite a alguma linguagem de programação!");
    };
};



function adicionarLinguagem(event){
    event.preventDefault();

    const linguagem = document.querySelector("#input-text").value;
    
    criarElementoLista(linguagem);

    event.target.elements[0].value = "";
};



const elementoForm = document.querySelector("form");
elementoForm.addEventListener('submit', adicionarLinguagem);