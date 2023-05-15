/* let numero = parseInt(prompt("por fa ingresa un numero y le sumare un digito"))

for(let i=1; i<=3;i++){
    let resultado= numero+i
    alert(numero+ " + "+ i+" es igual a "+resultado)
   } */

/* let entrada = prompt("ingrese su nombre por favor o esc para cancelar")


while (entrada!="esc") {
    alert("su nombre es "+entrada);
    entrada=prompt("ingrese otro nombre o esc para cancelar")
    
}
 */
 
/* let ingresarNumero=parseInt(prompt("ingrese un numero rey"));

for(let i=1; i<=10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero+" X "+i+" es igual a "+resultado )
} */

/* function saludar (nombre, apellido){
    console.log(`hola ${nombre} ${apellido}`)
}

saludar("facundo","quiroga")
saludar("sonia","perez")
saludar("martin","perez") */

function calculadora(primerNumero,segundoNumero,operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero
            break
            case "-":
                return primerNumero - segundoNumero
                break
                case "*":
                    return primerNumero * segundoNumero
                    break
                    case "/":
                        return primerNumero / segundoNumero
                        break
                        default:
                            return "0"
                            break
    }
}

console.log(calculadora(20,30,"+"))
console.log(calculadora(10,20,"*"))
console.log(calculadora(100,30,"-"))

const resta = (a,b) => a - b

console.log(resta(50,20))


function Cliente(nombre,apellido){
    this.nombre= nombre.toUpperCase();
    this.apellido=apellido;
    this.gay=true;
    this.saludar=function(){
        console.log("hola "+this.nombre+" "+this.apellido)
    }
}
const cliente1= new Cliente("lucio","albornoz")
const cliente2= new Cliente("budin","fantasi")
const cliente3= new Cliente("sonia","Perez")
const cliente4= new Cliente("Sudin","Pantasi")

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)
console.log(cliente4)

cliente1.saludar()

let nombres= ["juan","pedro","rocco","martin","pelusa","jorge","chicho"]

for(let i=0; i<=6; i++){
    console.log(nombres[i])
}

nombres.unshift("mario")
console.log(nombres)
console.log("ACA ABAJO ES OTRO TEMA")

/* const Nombres = []
 
let cantidad = 5;

do{
    let entrada= prompt("ingrese un nombre a la vez")
    Nombres.push(entrada.toUpperCase())
    
}while(Nombres.length != cantidad)
console.log(Nombres)  como pushear dentro de una lista */

/* const Nombres=["Sergio","Carlos","Agustina","Motorero","Pablo"]

const eliminar=(nombre)=>{
    let index= Nombres.indexOf(nombre)

    if(index != -1){
        Nombres.splice(index, 1)
    }
}
eliminar("Pablo")

eliminar("Agustina")
console.log(Nombres) eliminar cosas de un array  */

const autos = ["Ford","Peugeot","Fiat","Wolsgawen","Ferrari"]

autos.forEach((a,indice)=>{
    console.log(`${indice} : ${a}`)
})