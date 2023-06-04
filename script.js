function abrirMenuLateral(){
    const barra1 = document.querySelector("div.menu-barra1")
    const barra2 = document.querySelector("div.menu-barra2")
    const barra3 = document.querySelector("div.menu-barra3")
    const menuLateral = document.querySelector("nav.nav-menu")

    if(getComputedStyle(menuLateral).left == "-200px"){
        setTimeout(function(){barra1.style.top = "20px"}, 10)
        setTimeout(function(){barra1.style.transform = "rotate(45deg)"}, 180)
        barra2.style.top = "20px"
        barra2.style.transform = "scale(0)"
        setTimeout(function(){barra3.style.top = "20px"}, 10)
        setTimeout(function(){barra3.style.transform = "rotate(-45deg)"}, 180)
        menuLateral.style.left = "0px"

    }else if(getComputedStyle(menuLateral).left == "0px"){
        setTimeout(function(){barra1.style.top = "10px"}, 170)
        barra1.style.transform = "rotate(0deg)"
        barra2.style.top = "20px"
        setTimeout(function(){barra2.style.transform = "scale(1)"}, 200)
        setTimeout(function(){barra3.style.top = "30px"}, 170)
        barra3.style.transform = "rotate(0deg)"
        menuLateral.style.left = "-200px"
    }
}