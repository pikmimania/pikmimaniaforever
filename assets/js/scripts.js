document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");

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
