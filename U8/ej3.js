function verificar(name) {
  return new Promise(function (resolver, rechazar) {
    let n = 0;
    let intervalo = setInterval(function () {
      n++;
      if (n == 2) {
        resolver('Han pasado 2 segundos');
        clearInterval(intervalo);
      }
    }, 1000);

    if(name=='admin')resolver('Usuario verificado correctamente');
    else{rechazar(new Error('Usuario no encontrado'))}
  });
}

//

submit.addEventListener("click", function (e) {
  const value = document.getElementById("name").value;
});


Submit.addEventListener("click", function (e) {
  e.preventDefault();
  const value = document.getElementById("name").value;
  verificar(value).then().catch();
});
//