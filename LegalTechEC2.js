document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btnEnviar");
    const form = document.getElementById("formContacto");
    const status = document.getElementById("status");

    btn.addEventListener("click", function() {
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        btn.textContent = "Enviando...";
        btn.disabled = true;

        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                status.textContent = "✓ ¡Gracias! Tu consulta ha sido enviada con éxito.";
                status.style.color = "#2ecc71";
                form.reset();
            } else {
                status.textContent = "Hubo un error al enviar.";
                status.style.color = "#e74c3c";
            }
        })
        .finally(() => {
            btn.textContent = "Enviar Consulta";
            btn.disabled = false;
        });
    });
});