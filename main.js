import {nombrar,Introduccion,tutorial,Casa,MenosV,PrimerPuerta,Puertas7, Puerta2Llave,EscaparLlave, respuesta,PPT} from './functs.js'
// Nombre e introduccion
const name= nombrar()
alert("Bienvenid@ " + name + " 👋🏻")
alert(Introduccion)
const cosa = tutorial()

// //Inicio
alert("Empecemos el juego!")
alert("Vas caminando por la calle un jueves a la madrugada, te encuentras una casa bastante grande con su puerta principal abierta")
Casa()
let life= 3
let win = 0
while (life>"0" || win!==1) {
    alert("Apenas está iluminado pero logras ver una gran cantidad de puertas, hay una cerca tuyo bastante llamativa")
    alert("⚠ No entrar ⚠, dice el cartel")
    if (PrimerPuerta()== "1"){
        life=MenosV(life,3)
       break
    }
    alert("Aun quedan 7 puertas, pero estas no tienen ninguna indicacion")
    Puertas7()
    alert("La habitacion es muy angosta, en medio ves una mesa pequeña y 10 llaves, decides tomarlas todas")
    alert("Habría que probar las 10 llaves con la puerta 2")
    Puerta2Llave()
    alert("Al ingresar, la puerta se cierra a tus espaldas, un forcejeo se escucha en la puerta que ves enfrente, alguien quiere entrar")
    alert("Del susto tropezaste y se te mezclaron las llaves en el suelo, encuentra de nuevo la llave para volver por donde viniste, rapido, tiraran la puerta abajo en aproximadamente 50 segundos!")
    EscaparLlave()
    alert("La silueta frente a ti exclama...")
    alert("???: Hola " +name)
    alert("???: Seguro te preguntas por qué se tu nombre")
    respuesta()
    alert("???: Vos me diste esto...")
    if (cosa==1){alert ("🎸");alert("???: Me arruinaste la vida, solo hay una forma de arreglar las cosas...")}
    else if (cosa==2){alert ("⚽");alert("???: Me arruinaste la vida, solo hay una forma de arreglar las cosas...")}
    else {alert ("🎹"); alert("???: El piano era de juguete, me arruinaste la vida, solo hay una forma de arreglar las cosas...")}
    alert("Piedra, papel o tijeras")
    win = PPT()
    if (win==2){
        alert("Perdiste, la silueta te da un palazo en la cabeza y caes seco al piso")
        MenosV(life,3)
        break}
    else{alert("Ganaste, esta vez te dejo ir, ésta es la llave"); win=1; break }
} 
//Final  
if(life =="0"){alert("Moriste 😵")}
if(win==1){alert("Escapaste de la casa!")}
alert("Gracias por jugar 😀")
