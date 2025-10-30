class rectangulo{
    
    constructor(width, heigth){
        this.width;
        this.heigth;
        this.validation(width,heigth);
    }

    validation(width, heigth){

        if(width<=0){
            this.width=1;
        }
        else{this.width=width;}
        if(heigth<=0){
            this.heigth=1;
        }
        else{this.heigth=heigth;}

    }
    cambiarDimensiones(width, heigth){
        this.width=width;
        this.heigth=heigth;
    }
    calcularArea(){
        return this.width*this.heigth;
    }
    copia(){
        let copia=new rectangulo(this.width, this.heigth);
        return copia;
    }
    comparar(rectangulo2){
        if(this.calcularArea()<rectangulo2.calcularArea()){
            return "El area del rectangulo2 es mayor";
        }

        else{
             if (this.calcularArea()==rectangulo2.calcularArea()) {
                return "El area de ambos rectangulos es la misma";
            }
            else{
            return "El area del rectangulo1 es mayor";
            }
        }
    }
}

const rectangulo1=new rectangulo('4','5');
const rectangulo2=new rectangulo('4','3');
console.log(`ancho: ${rectangulo1.width}alto:  ${rectangulo1.heigth}`);
rectangulo1.comparar(rectangulo2);
rectangulo1.cambiarDimensiones('10','5');

const rectangulo3 =rectangulo1.copia();
console.log(`ancho: ${rectangulo3.width}alto:  ${rectangulo3.heigth}`);
//Enseñarlo en el Doom

let rec1=document.createElement("div");
rec1.textContent=`con-> ancho: ${rectangulo1.width}alto:  ${rectangulo1.heigth}`;

let gg=document.getElementById("a");
gg.appendChild(rec1);

let area1=document.createElement("div");
area1.textContent=`El area del rectangulo 1 es${rectangulo1.calcularArea()}`;
gg.appendChild(area1);


let rect2=document.createElement("div");
rect2.textContent=`Creamos el rectangulo 2, con-> ancho: ${rectangulo2.width}alto:  ${rectangulo2.heigth}`;
gg.appendChild(rect2);

let comparacion=document.createElement("div");
comparacion.textContent=`Comparamos el rectangulo 1, con el rectangulo 2 y: ${rectangulo1.comparar(rectangulo2)}`;
gg.appendChild(comparacion);

let copia2=document.createElement("div");
const copia=rectangulo1.copia();
copia2.textContent=`Las medidas de la copia son: -> ancho: ${copia.width}alto:  ${copia.heigth}}`;
gg.appendChild(copia2);


let cambio=document.createElement("div");
rectangulo1.cambiarDimensiones('3','2');
cambio.textContent=`cambiaremos el area del rectangulo 1: con-> ancho: ${rectangulo1.width}alto:  ${rectangulo1.heigth}}`;
gg.appendChild(cambio);
