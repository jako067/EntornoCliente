class ordenador{

    constructor(marca, modelo, ram=4, capacidad=512, pulgada=17){

        this.marca=marca;
        this.modelo=modelo;
        this.ram=ram;
        this.capacidad=capacidad;
        this.pulgada=pulgada;

    }
    toString(){

        return `marca: ${this.marca} modelo: ${this.modelo} ram: ${this.ram} GB capacidad: ${this.capacidad} GB pantalla: ${this.pulgada} pulgadas`;
    }
}
let ordenador1= new ordenador("Hp", "Xl");
console.log(ordenador1.toString());

class portatil extends ordenador{

    constructor(marca, modelo, ram=4, capacidad=512, pulgada=17, autonomia=4){
        super(marca,modelo,ram,capacidad,pulgada);
        this.autonomia=autonomia;
    }
    toString(){

        return `marca: ${this.marca} modelo: ${this.modelo} ram: ${this.ram} GB capacidad: ${this.capacidad} GB pantalla: ${this.pulgada} pulgadas autonomía: ${this.autonomia} horas`;
    }
}

let portatil1= new portatil("Hp", "Xl");
console.log(portatil1.toString());

var crear=document.getElementById("generar");
var ord1=document.createElement("p");
ord1.textContent='Creamos el primer ordenador:'+ordenador1.toString();
crear.appendChild(ord1);

var port1=document.createElement("p");
port1.textContent='Creamos el primer portatil:'+portatil1.toString();
crear.appendChild(port1);

