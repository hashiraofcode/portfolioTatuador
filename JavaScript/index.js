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