function sumarAsync (a,b){
return new Promise((aceptar, rechazar)=>{
let n1=a;
let n2=b;

if(isNaN(n1)||isNaN(n2))rechazar(Error("No es un número"));
else aceptar(n1+n2);
})
}
sumarAsync(3,'g').then((respuesta) => {
console.log(respuesta)
})
.catch((error) => {
console.log(error.message)
});

