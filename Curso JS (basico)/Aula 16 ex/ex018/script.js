let num = document.querySelector('input#num')
let lista = document.getElementById('lista')
let txt = document.getElementById('txt')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{ 
        return false
    }

}

function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        txt.innerHTML = ''

    }else{
        alert('Número invalido ou já encontrado!')
    }
    num.value= ''
    num.focus()
    
}

function confirmar(){

    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        txt.innerHTML = ''
        txt.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        txt.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        txt.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        txt.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        txt.innerHTML += `<p>A média dos valores digitados é ${media}</p>`


        
    }

}