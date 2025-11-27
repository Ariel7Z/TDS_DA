const dados = localStorage.getItem("dados");


const input = document.getElementById("campo");

input.value = dados;

function salvar(){
    localStorage.setItem("dados", input.value);
}

function excluir(){
    localStorage.removeItem("dados");
    input.value = "";
}

const pessoas = ["Ariel", "Bianca", "Antoni", "Maria", "Keli"];

for (var i = 0; i <= 5; i++);
const h1 = document.createElement("h1");

h1.innerHTML = pessoas(i);

document.body.appendChild(h1);