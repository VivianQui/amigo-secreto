// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

//Función para agregar amigo en la lista
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    //validadr entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos
    listaDeAmigos.push (nombre);

    //Limpiar el campo de entrada
    inputAmigo.value = "";
}

function actualizarListaAmigos() {
    //Obtener el elemento de la lista
    let listaHTML = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    listaHTML.innerHTML = "";

    //Iterar sobre el arreglo
    for (let amigo of listaDeAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;

        //Agregar elementos a la lista
        listaHTML.appendChild(li);
    }
}