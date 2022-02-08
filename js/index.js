const tituloDoSite = "Open doors coding Javascript.";

const meuTitulo = document.getElementById('meu-titulo');
const closeddoor = document.getElementById('closeddoor');

meuTitulo.innerHTML = tituloDoSite;

closeddoor.addEventListener("mouseenter", function() {
    closeddoor.src = "./img/59805.png"
});

closeddoor.addEventListener("mouseout", function() {
    closeddoor.src = "./img/32533.png"
})

function openmessage() {
    alert('Lets Code')
}



