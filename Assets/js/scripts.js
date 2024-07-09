document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Evento click para el botón "Enviar por correo"
    document.getElementById('enviarCorreo').addEventListener('click', function() {
        alert('El correo fue enviado correctamente...');
    });

    // Evento doble clic para cambiar color de los títulos
    document.getElementById('ingredientes').addEventListener('dblclick', function() {
        this.style.color = 'red';
    });

    document.getElementById('preparacion').addEventListener('dblclick', function() {
        this.style.color = 'red';
    });

    // Evento click para toggle de tarjetas
    document.querySelectorAll('.card-title').forEach(function(title) {
        title.addEventListener('click', function() {
            const cardText = this.nextElementSibling;
            if (cardText) {
                cardText.style.display = cardText.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
