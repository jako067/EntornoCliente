let nameInput = document.getElementById("name");
let saveButton = document.getElementById("save");

function guardar() {
  let nombre = nameInput.value.trim(); 
  if (nombre !== "") {
    localStorage.setItem("nombreUsuario", nombre);
    location.reload(); 
  } else {
    alert("Por favor, ingresa un nombre.");
  }
}
saveButton.addEventListener("click", guardar);


window.addEventListener("load", () => {
  let nombreGuardado = localStorage.getItem("nombreUsuario");

  if (nombreGuardado) {
    document.body.innerHTML = `<h2>Bienvenido, ${nombreGuardado}!</h2>`;
  
  }
});
