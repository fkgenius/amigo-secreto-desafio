// El array para guardar la lista de amigos sigue igual.
let amigos = [];

// La función para agregar amigos no cambia su lógica.
function agregar() {
    const campoAmigo = document.getElementById('nombreAmigo');
    const nombreAmigo = campoAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();
    
    campoAmigo.value = '';
    campoAmigo.focus();
}

// La función para mostrar la lista en el HTML tampoco cambia.
function actualizarLista() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// La lógica del sorteo se mantiene.
function sortear() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

// La función de reiniciar también es la misma.
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Juego reiniciado.');
}

// --- CAMBIO IMPORTANTE AQUÍ ---
// Ahora, en lugar de usar 'onclick' en el HTML, asignamos los eventos desde JavaScript.
// Esto es mejor porque separa completamente la estructura (HTML) del comportamiento (JS).
// Gracias a 'defer' en la etiqueta <script>, este código se ejecuta cuando el HTML ya está listo.
document.getElementById('boton-agregar').addEventListener('click', agregar);
document.getElementById('boton-sortear').addEventListener('click', sortear);
document.getElementById('boton-reiniciar').addEventListener('click', reiniciar);
