const botaoMenu = document.getElementById("menu")
const botaoX = document.getElementById("fecharMenu")

function abrirMenu() {
    const aside = document.getElementById("aside")
    aside.classList.add("active")
}
function fecharMenu() {
    const aside = document.getElementById("aside")
    aside.classList.remove("active")
}

botaoX.addEventListener("click", fecharMenu)
botaoMenu.addEventListener("click", abrirMenu)
// fazendo funcionalidade do menu drop
const btnAbrirDrop = document.getElementById("btn-main")

function abrirDrop() {
    btnAbrirDrop.classList.toggle("abrir")
    const menuDrop = document.getElementById("nav")
    menuDrop.classList.toggle("menuAberto")
}

btnAbrirDrop.addEventListener("click", abrirDrop)