function Confirmar(){

    const mostrarResultado = document.getElementById("res")

    const numeroComeco = Number(document.querySelector('input#numc').value)
    const numeroFinal = Number(document.querySelector('input#numf').value)
    const numeroSoma = Number(document.querySelector('input#nump').value)

    mostrarResultado.innerHTML = ` `

    if(numeroComeco < numeroFinal && numeroSoma < numeroFinal){
        for(let cont = numeroComeco; cont <= numeroFinal; cont += numeroSoma){

            if((cont + numeroSoma) <= numeroFinal){
                mostrarResultado.innerHTML += `${cont}, `
            }else{
                mostrarResultado.innerHTML += `${cont}.`
            }
            
        }
    }else{
        alert("Números invalidos")
    }
}