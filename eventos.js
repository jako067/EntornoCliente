//Ejer 1
function addrandom() {
  let a = parseInt(Math.random() * 100);
  var neuvoli = document.createElement('LI');
  neuvoli.textContent = a;
  let b = document.getElementById('list');
  b.appendChild(neuvoli);
}

document.getElementById('miBoton').addEventListener('click', addrandom);

//Ejer 2

function cords(event) {
  let p = document.getElementById('coords');
  p.textContent = event.clientX + 'X : ' + event.clientY + 'Y';
}

document.addEventListener('mousemove', cords);

//Ejer 3
var desaparecer = document.getElementsByClassName('desaparecer');
function invisible() {
  this.style.display = 'none';
}
for (const key of desaparecer) {
  key.addEventListener('click', invisible);
}
var desaparecer = document.getElementsByClassName('desaparecer');

//Hacer que reaparezcan

function visible() {
  for (const key of desaparecer) {
    key.style.display = 'block';
  }
}
let breaparecer = document.getElementById('reaparecer');

breaparecer.addEventListener('click', visible);

//Ejer 4

var botonesu = document.getElementsByName('nombre');

let nombre;
var salud = document.getElementById('saludo');
var sal = document.createElement('div');
function saludando() {
  nombre = this.value;
  sal.textContent = nombre;
}
salud.appendChild(sal);

for (const key of botonesu) {
  key.addEventListener('change', saludando);
}

var getElementsByClassName;

//EJER 5

function cuadradoAzul() {
  document.body.style.backgroundColor = 'blue';
}
let azul = document.getElementById('azul');
azul.addEventListener('mouseover', cuadradoAzul);

function cuadradoRojo() {
  document.body.style.backgroundColor = 'red';
}
let rojo = document.getElementById('rojo');
rojo.addEventListener('mouseover', cuadradoRojo);

function cuadradoVerde() {
  document.body.style.backgroundColor = 'green';
}
let verde = document.getElementById('verde');
verde.addEventListener('mouseover', cuadradoVerde);

//

let paises = document.getElementsByName('paises');
let eleccion=document.getElementById('eleccion');
function paisPropio() {
    let aaa= document.createElement("div")
    aaa.textContent=this.value;
    eleccion.appendChild(aaa);
}

for (const key of paises) {
  key.addEventListener('change', paisPropio);
}

//Ejer8

