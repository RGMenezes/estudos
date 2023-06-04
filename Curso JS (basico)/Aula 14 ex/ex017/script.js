function cal(){

    var res = document.getElementById('res')
    var sel = document.getElementById('sel') 
    var nu = document.getElementById('num')
    var num = Number(nu.value)

    if (nu.value.length == 0){
        alert('Não indentificamos nenhum número. Por favor, repita o processo!')
    }else{
        sel.innerHTML=''
        for (let c = 0; c < 11; c++){
            let re = num * c
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${re}`
            item.value = `tab${c}`
            sel.appendChild(item)
        }
    }
}