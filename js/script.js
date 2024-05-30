// Esperar a que el DOM esté cargado antes de interactuar con él
document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.getElementById('formulario-contacto');

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos del formulario
        const nombre = document.querySelector('input[name="nombre"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const asunto = document.querySelector('input[name="asunto"]').value.trim();
        const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

        // Validar los campos (puedes agregar más validaciones según tus necesidades)
        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Aquí puedes enviar los datos del formulario a un servidor o realizar otras acciones
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Asunto:', asunto);
        console.log('Mensaje:', mensaje);

        // Resetear el formulario después de enviarlo
        formularioContacto.reset();
        alert('¡Mensaje enviado con éxito!');
    });
});




const prevButton = document.querySelector('.carrusel-prev');
        const nextButton = document.querySelector('.carrusel-next');
        const carruselCards = document.querySelector('.carrusel-cards');
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarrusel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < carruselCards.children.length - 1) {
                currentIndex++;
                updateCarrusel();
            }
        });

        function updateCarrusel() {
            const cardWidth = carruselCards.children[0].offsetWidth;
            const newTransform = -currentIndex * cardWidth;
            carruselCards.style.transform = `translateX(${newTransform}px)`;
        }
