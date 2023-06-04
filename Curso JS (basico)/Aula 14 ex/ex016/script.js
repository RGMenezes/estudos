function Contar(){

    var mos = document.querySelector('div#mos')
    var det = document.querySelector('div#det')
    
    var numc = document.querySelector('input#numc')
    
    var numf = document.getElementById('numf')
   
    var nump = document.getElementById('nump')
    
    if(numc.value.length == 0 || numf.value.length == 0 || nump.value.length == 0){
        mos.innerHTML = `Impossivel contar!`
        //alert('[ERRO] Dados incorretos!')
    } else {
        mos.innerHTML = `Contando: <br>`
        var co = Number(numc.value)
        var f = Number(numf.value)
        var p = Number(nump.value)
        if (p <= 0){
            alert('Impossivel contar, considerando passo como 1')
            p = 1
        }

        if (co < f){
            //contagem crescente
            for (var c= co; c <= f; c += p){
            mos.innerHTML += ` ${c} \u{1F449}`
            }
            mos.innerHTML += `\u{1f3c1}`
        } else {
            //contagem regressiva
            for(var c = co; c >= f; c -= p){
            mos.innerHTML += `${c} \u{1F449}`
            }
            mos.innerHTML += `\u{1f3c1}`
        }
    }

}