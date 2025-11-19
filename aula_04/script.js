function add() {

    var lista = document.getElementById('itens');
 
    var campo = document.getElementById('campo');

    var li = document.createElement('li');

    li.innerHTML = campo.value;

    var btn = document.createElement('button');
    btn.innerHTML = "X";
    btn.addEventListener('click', function () {
        lista.removeChild(this.parentNode)
    });

    li.appendChild(btn);

    lista.appendChild(li);

    campo.value = "";

}