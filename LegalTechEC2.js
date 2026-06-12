document.addEventListener("DOMContentLoaded", function() {
    
    // Capturamos los elementos clave del formulario de contacto
    const formulario = document.getElementById("formContacto");
    const respuestaFeedback = document.getElementById("feedbackMensaje");
    const botonEnviar = document.getElementById("btnEnviar");

    // 2. Escuchamos el evento de envío del formulario ('submit')
    formulario.addEventListener("submit", function(evento) {
        
        // Detenemos el comportamiento nativo por defecto (evitamos que la página se recargue)
        evento.preventDefault();
        
        // Cambiamos el texto del botón de manera fáctica para simular el procesamiento
        botonEnviar.textContent = "Procesando Envío Institucional...";
        botonEnviar.disabled = true;

        // Simulamos la verificación y envío de datos seguros tras un lapso de 1.5 segundos
        setTimeout(function() {
            
            // Inyectamos las clases dinámicas CSS y el mensaje fáctico de confirmación
            respuestaFeedback.textContent = "¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.";
            respuestaFeedback.className = "msg-oculto msg-exito";
            
            // Limpiamos los campos del formulario de forma automática
            formulario.reset();
            
            // Restauramos las propiedades iniciales del botón corporativo
            botonEnviar.textContent = "Enviar Mensaje Institucional";
            botonEnviar.disabled = false;
            
            // Imprimimos un registro de auditoría interno en la consola de desarrollo
            console.log("Sistema de Mensajería: Formulario procesado y enviado con éxito.");

        }, 1500);
    });
});
