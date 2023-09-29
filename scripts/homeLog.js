//******************************************************* */

// Func carga canales cuando se selecciona un servidor
function cargarCanales(id_servidor) {
    
}

// Func cargar mensajes cuando se selecciona un canal
function cargarMensajes(id_canal) {
    
}

// Event listener para cuando se selecciona un servidor
document.querySelector(".column.servers").addEventListener("click", function(event) {
    if (event.target.classList.contains("server")) {
        const servidorId = event.target.dataset.servidorId;
        cargarCanales(id_servidor);
    }
});

// Event listener para cuando se selecciona un canal
document.querySelector(".column.channels").addEventListener("click", function(event) {
    if (event.target.classList.contains("channel")) {
        const canalId = event.target.dataset.canalId;
        cargarMensajes(id_canal);
    }
});


