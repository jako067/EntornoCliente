let precio = 100;
const precioEl = document.getElementById("precio");
const mensajeEl = document.getElementById("mensaje");

let intervalo = setInterval(() => {

  let cambio = Math.floor(Math.random() * 11) - 5;
  precio += cambio;

  precioEl.textContent = "Precio: " + precio;

  if (precio >= 120) {
    mensajeEl.textContent = "Llegaste al máximoo";
    clearInterval(intervalo);
  } else if (precio <= 80) {
    mensajeEl.textContent = "Llegaste al mínimoo";
    clearInterval(intervalo);
  }
}, 1000);
