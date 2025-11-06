function primeraTarea(){
    return new Promise((resolver,rechazar)=>{
        resolver(10);
    })
}

function segundaTarea(){
    return primeraTarea().then((valor)=>{return valor *2});
}

function terceraTarea(){
    return segundaTarea().then((valor)=>{return valor +5});
}

terceraTarea().then((respuesta) => {
console.log(respuesta)
});

