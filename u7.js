
//setTimeout(() => {window.location.href = "https://www.google.es";}, 5000);
let bara="";
var cont=0;
const temp2=setInterval(()=>{
barra+="█"
    console.log(barra);
    cont++;
if(cont>=10) clearInterval(temp2); console.log("carga completada");
},5000);

