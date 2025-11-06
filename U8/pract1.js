let button = document.getElementById('buy');

function buy() {
  var name = document.createElement('div');
  var direction = document.createElement('div');

  name.textContent = document.getElementById('name').value;
  direction.textContent = document.getElementById('send').value;
  let producto =[document.getElementById('name').value,document.getElementById('send').value];

  function procesarPago(producto) {
    return new Promise((aceptar, rechazar) => {
      setTimeout(function todo(){ 
    if (producto[0] == '' || producto[1] =='') 
        rechazar(Error("No se puede procesar el pago sin producto"));
      else aceptar('');},1500);

    });
  }
  function enviarPedido(){
    return new Promise((aceptar, rechazar) => {

    if(!producto[1]==''){
        setTimeout(function sadsa(){
            let random=Math.random() * (100 - 0);
            if(random>20){aceptar('')}
            else{rechazar('mala suerte')}

        },2000);
    }
    else rechazar(Error('Dirección de envío no válida'))

})
}
  procesarPago(producto)
  .then((respuesta) => {
    var txt = document.createElement('div');
    txt.textContent='Se añadió correctamente el producto:';
    document.getElementById('results').appendChild(txt);
    document.getElementById('results').appendChild(name);
    enviarPedido();
  })
  .catch((error) => {
    var txt = document.createElement('div');
    txt.textContent='No puedes agregar un producto vacío';
    document.getElementById('results').appendChild(txt);
  });

}




button.addEventListener('click', buy);


