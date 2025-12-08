let ms = 5000;
let cont = document.getElementById("cont");
let tiempo = 5;

let interval = setInterval(() => {
  cont.textContent = tiempo;
  tiempo--;

  if (tiempo < 0) {
    clearInterval(interval);
    cont.textContent = "¡Tiempo!";
    noti();
  }
}, 1000);

function noti() {
  Notification.requestPermission().then((resp) => {
    if (resp === "granted") {
      let notification = new Notification("¡Hola!", {
        body: "Haz clic para abrir el video",
        icon: "icono.png",
      });

      notification.onclick = () => {
        window.location.href = "./video.html";
        notification.close();
      };
    }
  });
}
