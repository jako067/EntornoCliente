let video = document.getElementById('miVideo');
let info = document.getElementById('info');

video.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    let segundos = Math.floor(video.duration);
    let minutos =(segundos / 60);
    info.textContent = `Duración total: ${minutos} min ${segundos} seg`;
});
