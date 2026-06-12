document.addEventListener("DOMContentLoaded", function() {
    
    // Capturamos los elementos clave (Asegúrate de que el form tenga id="formContacto")
    const formulario = document.getElementById("formContacto");
    const respuestaFeedback = document.getElementById("feedbackMensaje");
    const botonEnviar = document.getElementById("btnEnviar");

    formulario.addEventListener("submit", function(evento) {
        // Detenemos el comportamiento nativo
        evento.preventDefault();
        
        botonEnviar.textContent = "Procesando Envío Institucional...";
        botonEnviar.disabled = true;

        // Preparamos los datos del formulario
        const formData = new FormData(formulario);

        // Realizamos el envío real a Formspree
        fetch(formulario.action, {
            method: formulario.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                // Éxito real
                respuestaFeedback.textContent = "¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.";
                respuestaFeedback.className = "msg-oculto msg-exito";
                formulario.reset();
                console.log("Sistema de Mensajería: Formulario enviado a servidor externo correctamente.");
            } else {
                // Error en el envío
                respuestaFeedback.textContent = "Error al enviar el mensaje. Intente de nuevo.";
                respuestaFeedback.className = "msg-oculto msg-error";
            }
        })
        .catch(error => {
            respuestaFeedback.textContent = "Error de conexión con el servidor.";
            respuestaFeedback.className = "msg-oculto msg-error";
        })
        .finally(() => {
            // Restauramos el botón
            botonEnviar.textContent = "Enviar Mensaje Institucional";
            botonEnviar.disabled = false;
        });
    });
});