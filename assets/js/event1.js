document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");

    if (music === null) {
        return;
    }

    // Intenta reproducir el audio automáticamente
    var playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay bloqueado. Esperando interacción del usuario.");
        });
    }

    // Reproduce la música cuando el usuario haga clic en cualquier parte de la página
    document.body.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    }, { once: true }); // Solo se ejecuta la primera vez que haga clic

    // Selecciona todos los tabs y los contenedores de contenido
    const tabs = document.querySelectorAll('.list-tab');
    const contents = document.querySelectorAll('.tab-content-list');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Remueve la clase activa de todos los tabs
          tabs.forEach(item => item.classList.remove('active-tab-link'));
          // Remueve la clase activa de todos los contenidos
          contents.forEach(content => content.classList.remove('active-tab'));
          
          // Agrega la clase activa al tab clicado
          tab.classList.add('active-tab-link');
          
          // Obtiene el ID del contenido a mostrar desde el atributo data-target
          const targetId = tab.getAttribute('data-target');
          // Agrega la clase activa al contenido correspondiente
          document.getElementById(targetId).classList.add('active-tab');
        });
      });
});

function toggleMusic() {
    var music = document.getElementById("bg-music");
    var button = document.getElementById("mute-btn");
    
    if (music.muted || music.paused) {
        music.muted = false;
        music.play();
        button.textContent = "🔊";
    } else {
        music.muted = true;
        button.textContent = "🔇";
    }
}
