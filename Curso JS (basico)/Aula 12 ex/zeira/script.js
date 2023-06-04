function comfirmar(){
    
    var jun = document.getElementById('jun')
    var por = document.querySelector('div#por')
    
    var no = document.getElementById('txtn')
    var nome = String(no.value)// nome ok

    var compra = document.getElementsByName('raspag')


    var sa = document.getElementById('nums') // conta ok
    var salario = Number(sa.value)

    var des = document.getElementById('nump')
    var despesa = Number(des.value)

    var porc = (100*despesa) / salario


    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    
    if (compra[0].checked){
        var subtra = salario - despesa
        if ( subtra > 400){//foto positiva
            jun.innerHTML = `Parabéns ${nome}, seu saldo está no positivo restando ${subtra}R$ para usar como quiser!`
            por.innerHTML = `A sua dívida representa ${porc}% do seu salário.`
            img.setAttribute('src', 'grana.png')
        }else if (subtra>-1){
            jun.innerHTML = `Parabéns ${nome} a sua administração está boa, mas cuidado o seu dinheiro restante, ${subtra}R$, pode não ser o suficiente! `
            por.innerHTML = `A sua dívida representa ${porc}% do seu salário.`
            img.setAttribute('src', 'pagar.png')
        } else{
            jun.innerHTML = `Perdão ${nome}, não consegui entender a sua despesa!`
            por.innerHTML = `[ERRO-287]`
        }
    } else if (compra[1].checked){
        var subtrair = salario - despesa
        if (porc <= 30){
            jun.innerHTML = `Parabéns ${nome}, seu saldo está no positivo restando ${subtrair}R$ para usar como quiser!`
            por.innerHTML = `A sua dívida representa ${porc}% do seu salário.`
            img.setAttribute('src', 'grana.png')
        } else if (porc <= 50){
            jun.innerHTML = `Parabéns ${nome} a sua administração está boa, mas cuidado o seu dinheiro restante, ${subtrair}R$, pode não ser o suficiente para as proximas despesas! `
            por.innerHTML = `A sua dívida representa ${porc}% do seu salário.`
            img.setAttribute('src', 'pagar.png')
        }else{
            jun.innerHTML = `Meu Deus ${nome}, desse jeito você ira falir, repense e mude os seus abtos de consumo! URGENTE!!!`
            por.innerHTML = `A sua dívida representa ${porc}% do seu salário.`
            img.setAttribute('src', 'divida.png')
        }

    }
    por.appendChild(img)
    
    
}