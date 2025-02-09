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
