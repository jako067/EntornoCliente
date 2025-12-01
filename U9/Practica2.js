let id = '';
let title = '';
let precio = '';
let boton = document.getElementById('buscar');
let resultado = document.getElementById('resultado');

boton.addEventListener('click', main);

function main() {
  //ahora arreglamos el fetch y ya está

  id = document.getElementById('id').value;

  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      id = data.id;
      title = data.title;
      precio = data.price;

      document.getElementById(
        'resultado'
      ).innerHTML = `Título: ${title} id:  ${id} Precio:  ${precio}`;
      const datos = {
        id: id,
        title: title,
        precio: precio,
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .then((data) => {
          console.log('Respuesta del servidor:', data.title);
        })
        .catch((error) => {
          console.error('Error en la petición:', error);
        });
    })

    .catch((error) => {
      document.getElementById('resultado').innerHTML =
        'Dicho Id, no existe. Error 404';
    });

  //API de prueba,los datos no se guardan realmente pero obtienes una respuesta simulada
}
