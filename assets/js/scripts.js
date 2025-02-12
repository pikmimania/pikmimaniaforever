function toggleMusic() {
    var music = document.getElementById("bg-music");
    var button = document.getElementById("mute-btn");
    
    music.muted = !music.muted;
    button.textContent = music.muted ? "🔇" : "🔊";
}
