document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");
    const feedback = document.getElementById("feedbackMensaje");
    const boton = document.getElementById("btnEnviar");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // ESTO ES LO QUE EVITA QUE TE BOTEN DE TU WEB
        
        boton.textContent = "Enviando...";
        boton.disabled = true;

        const datos = new FormData(formulario);

        fetch(formulario.action, {
            method: formulario.method,
            body: datos,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                feedback.textContent = "¡Gracias! Tu consulta ha sido enviada con éxito.";
                feedback.style.color = "#2ecc71"; // Verde éxito
                formulario.reset();
            } else {
                feedback.textContent = "Hubo un error al enviar. Inténtalo de nuevo.";
                feedback.style.color = "#e74c3c"; // Rojo error
            }
        })
        .catch(() => {
            feedback.textContent = "Error de conexión.";
            feedback.style.color = "#e74c3c";
        })
        .finally(() => {
            boton.textContent = "Enviar Consulta";
            boton.disabled = false;
        });
    });
});