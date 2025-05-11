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

const about = document.getElementById("about")
const realismo = document.getElementById("realismo")
const line = document.getElementById("line")
const old = document.getElementById("old")
const interface = document.getElementById("interface")

function abrirAbout() {
    interface.className = '';
    about.classList.add("selecionado")
    realismo.className = '';
    line.className = '';
    old.className = '';
    interface.classList.add("sobre")
}
function abrirRealismo() {
    about.className = '';
    realismo.classList.add("selecionado")
    line.className = '';
    old.className = '';
}
function abrirLine() {
     about.className = '';
    realismo.className = '';
    line.classList.add("selecionado")
    old.className = '';
}
function abrirOld() {
     about.className = '';
    realismo.className = '';
    line.className = '';
    old.classList.add("selecionado")
}

about.addEventListener("click", abrirAbout)
realismo.addEventListener("click", abrirRealismo)
line.addEventListener("click", abrirLine)
old.addEventListener("click", abrirOld)