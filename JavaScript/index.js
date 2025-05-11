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

const about = document.getElementById("about");
const realismo = document.getElementById("realismo");
const line = document.getElementById("line");
const old = document.getElementById("old");
const interface = document.getElementById("interface");
// limpa a classe selecionado de todos os itens para garantir que nenhum esteja com ela
function limparSelecionados() {
    about.classList.remove("selecionado");
    realismo.classList.remove("selecionado");
    line.classList.remove("selecionado");
    old.classList.remove("selecionado");
}
// limpa as classes referentes as seções para garantir que esteja sem elas
function limparInterface() {
    interface.classList.remove("sobre")
    interface.classList.remove("tattoLine")
    interface.classList.remove("tattoRealismo")
    interface.classList.remove("tattoOld")
}

function abrirAbout() {
    limparSelecionados();
    // limparInterface();
    about.classList.add("selecionado");
    // interface.classList.add("sobre");
}

function abrirRealismo() {
    // limparInterface();
    limparSelecionados();
    realismo.classList.add("selecionado");
    // interface.classList.add("tattoRealismo");
}

function abrirLine() {
    limparSelecionados();
    // limparInterface();
    line.classList.add("selecionado");
    // interface.classList.add("tattoLine");
}

function abrirOld() {
    // limparInterface();
    limparSelecionados();
    old.classList.add("selecionado");
    // interface.classList.remove("tattoOld");
}

about.addEventListener("click", abrirAbout);
realismo.addEventListener("click", abrirRealismo);
line.addEventListener("click", abrirLine);
old.addEventListener("click", abrirOld);
