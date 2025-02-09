// DESAFIO AMIGO SECRETO.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Definición de Variables
let amigos = [];
let flagSorteado = false;

condicionesIniciales();

// Función asociada al botón "Añadir".
// Los usuarios escribirán el nombre de un amigo en un campo de texto y 
// lo agregarán a una lista visible al hacer clic en "Añadir".
function agregarAmigo() {
    // Limpia Resultado
    if (flagSorteado) {
        asignarTextoElemento('#resultado','');   
        asignarTextoElemento('#listaAmigos','');   
        flagSorteado = false;
    }
    let amigoLeido = document.getElementById('amigo').value;
    document.querySelector('#amigo').value = '';
    if (amigoLeido == "") {
        alert("Por favor, Ingrese un Nombre Válido. Nombre en espacios.");
    }
    else {
        if (amigos.includes(amigoLeido)) {
            alert(`Por favor, Ingrese un Nombre Válido. Nombre Repetido ${amigoLeido}.`);
        }
        else {
            amigos.push(amigoLeido); 
            actualizaListaAmigos(amigos);
            //asignarTextoElemento('#listaAmigos',amigos);        
        }
    }
    return;
}
// Función asociada al botón "Sortear Amigo".
// Al hacer clic en el botón "Sortear Amigo", 
// se seleccionará aleatoriamente un nombre de la lista 
// y se mostrará en la página.
function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoSecreto = obtenerAmigoAleatorio(amigos);
        asignarTextoElemento('#resultado',`El amigo secreto es: ${amigoSecreto}`);
        inicializaSorteado();
    }
    else {
        alert("Error, No ha ingresado Nombres de Amigos.");
    }
    return;
}
// Función que obtiene un amigo aleatorio,
// desde un arreglo con nombres de amigos.
function obtenerAmigoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}
// Función que asigna en forma paramétrica Textos a elementos de la página.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function inicializaSorteado() {
    amigos = [];
    flagSorteado = true;
    return;
}
// Limpia elementos de página
function condicionesIniciales() {
    asignarTextoElemento('#resultado','');  
    document.querySelector('#amigo').value = '';
    return;
}
// Función Actualiza elemento listaAmigos de página
function actualizaListaAmigos(amigos) {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = '';
    for (let i=1 ; i<=amigos.length ; i++ ) {
        let li = document.createElement("li");
        li.textContent = amigos[i-1];
        lista.appendChild(li);
    }
    return;
}