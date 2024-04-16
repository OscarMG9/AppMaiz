// Obtenemos referencia al botón "Star"
const starButton = document.getElementById('star-button');

// Agregamos un evento de clic al botón
starButton.addEventListener('click', async () => {
    try {
        // Solicitamos permiso para acceder a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // Accedemos al elemento de video para mostrar la cámara
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        
        // Añadimos el video al contenido, reemplazando la imagen existente
        const contentDiv = document.querySelector('.content');
        contentDiv.innerHTML = ''; // Limpiamos el contenido existente
        contentDiv.appendChild(videoElement);
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
});
