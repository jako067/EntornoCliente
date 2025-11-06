let button = document.getElementById('buy');

function buy() {
  var producto = document.getElementById('name').value;
    var direction = document.getElementById('send').value;

  function procesarPago(producto) {
    return new Promise((aceptar, rechazar) => {
      setTimeout(function todo(){ 
    if (producto == '') 
        rechazar(Error("No se puede procesar el pago sin producto"));
      else {
        enviarPedido(direction).then(() => {console.log('el envio salió bien');
  })
  .catch((error) => {
    var txt = document.createElement('div');
    txt.textContent=error.message;
    document.getElementById('results').appendChild(txt);
  });



    var txt = document.createElement('div');
    txt.textContent='Se añadió correctamente el producto:'+producto;
    document.getElementById('results').appendChild(txt);
    aceptar('');}},1500);
    });
  }
  

  
  
  
  procesarPago(producto)
  .then((respuesta) => {console.log('ole');
  })
  .catch((error) => {
    var txt = document.createElement('div');
    txt.textContent=error.message;
    document.getElementById('results').appendChild(txt);
  });
}

function enviarPedido(direction){
    return new Promise((aceptar, rechazar) => {

    if(!direction==''){
        setTimeout(function sadsa(){
            let random=Math.random() * (100 - 0);
            if(random>20){aceptar('')}
            else{rechazar('mala suerte')}

        },2000);
    }
    else rechazar(Error('Dirección de envío no válida'))
})
}

button.addEventListener('click', buy);


