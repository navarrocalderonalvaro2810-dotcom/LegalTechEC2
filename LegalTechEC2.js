document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");
    const botonEnviar = document.getElementById("btnEnviar");
    const respuestaFeedback = document.getElementById("feedbackMensaje");

    if (formulario) {
        formulario.addEventListener("submit", async function(evento) {
            evento.preventDefault(); // Esto detiene la recarga de forma radical
            
            botonEnviar.textContent = "Procesando...";
            botonEnviar.disabled = true;

            try {
                const formData = new FormData(formulario);
                const response = await fetch(formulario.action, {
                    method: formulario.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    respuestaFeedback.textContent = "¡Mensaje enviado con éxito!";
                    respuestaFeedback.className = "msg-exito"; // Asegúrate de tener esta clase en tu CSS
                    formulario.reset();
                } else {
                    respuestaFeedback.textContent = "Error al enviar. Intente de nuevo.";
                    respuestaFeedback.className = "msg-error";
                }
            } catch (error) {
                respuestaFeedback.textContent = "Error de conexión.";
                respuestaFeedback.className = "msg-error";
            } finally {
                botonEnviar.textContent = "Enviar Mensaje Institucional";
                botonEnviar.disabled = false;
            }
        });
    }
});