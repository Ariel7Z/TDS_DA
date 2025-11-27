/localStorage.setItem('nome', 'Ariel');/

var nome = localStorage.getItem('nome');

var h1 = document.createElement(h1);

h1.innerHTML = nome;

document.body.appendChild(h1);