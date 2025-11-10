const button = document.getElementById('buy');
const results = document.getElementById('results');

function procesarPago(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!producto || producto.trim() === '') {
        reject(new Error("No se puede procesar el pago sin producto"));
      } else {
        resolve(`Pago procesado correctamente para ${producto}`);
      }
    }, 1500);
  });
}

function enviarPedido(direccion) {
  return new Promise((resolve, reject) => {
    if (!direccion || direccion.trim() === '') {
      reject(new Error("Dirección de envío no válida"));
      return;
    }

    setTimeout(() => {

      if (Math.random() < 0.2) {
        reject(new Error("Error durante el envío, intente de nuevo."));
      } else {
        resolve(`Pedido enviado correctamente a ${direccion}`);
      }
    }, 2000);
  });
}


async function buy() {

  results.textContent = '';

  const producto = document.getElementById('name').value;
  const direccion = document.getElementById('send').value;

  try {
    const pagoMsg = await procesarPago(producto);

    results.textContent = pagoMsg;

    const envioMsg = await enviarPedido(direccion);

    results.textContent = envioMsg;
  } catch (err) {

    results.textContent = err.message || String(err);
  }
}

button.addEventListener('click', buy);