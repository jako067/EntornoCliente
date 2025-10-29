const select = document.getElementById('opciones');
const creacion = document.getElementById('creaciones');

function elegir() {
  if (this.value == '1') {
    let aa = document.createElement('div');
    creacion.innerHTML = 'Ey buenos días';
  }

  if (this.value == '2') {
    let aa = document.createElement('div');
    creacion.innerHTML = '<div style="display: inline-block; border: 2px solid red; padding: 5px;"> caja roja </div>';
    creacion.appendChild(aa);
  }
  if (this.value == '3') {
    let aa = document.createElement('div');
    const numero = Math.floor(Math.random() * 100) + 1;
    creacion.textContent = `Número aleatorio generado: ${numero}`;
    creacion.appendChild(aa);
  }
}
select.addEventListener('change', elegir);

//

document.addEventListener("DOMContentLoaded", () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        let emailValido = false;
        let passwordValido = false;

        function validarEmail() {
          if (!email.value.includes("@")) {
            mensajeEmail.textContent = "El email debe contener un '@'.";
            emailValido = false;
          } else {
            mensajeEmail.textContent = "";
            emailValido = true;
          }
          actualizarBoton();
        }

        function validarPassword() {
          if (password.value.length < 8 || password.value.length > 10) {
            mensajePassword.textContent = "La contraseña debe tener entre 8 y 10 caracteres.";
            passwordValido = false;
          } else {
            mensajePassword.textContent = "";
            passwordValido = true;
          }

          function actualizarBoton() {
          if (emailValido && passwordValido) {
            enviar.disabled = false;
          } else {
            enviar.disabled = true;
          }
        }

          actualizarBoton();
        }
        email.addEventListener("blur", validarEmail);
        password.addEventListener("blur", validarPassword);
})
