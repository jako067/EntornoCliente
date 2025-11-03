let name = document.getElementById("name");
let save = document.getElementById("save");

function guardar() {
  console.log(name.value);
}

save.addEventListener("click", guardar);