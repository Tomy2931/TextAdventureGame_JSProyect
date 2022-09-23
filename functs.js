// Introduccion
export function nombrar (){
    let name=prompt('Ingrese su nombre')
    return name
}
export const Introduccion="Esta es la introduccion al juego estilo aventura de texto, tendras distintas opciones para enfrentar las situaciones. Aquí un pequeño tutorial:"
//Sistema de eleccion
export function eleccion(max,adicional){
    let num=0
    while (num<1 || num>max ){
        num=prompt(adicional)
        if (num>=1 && num<=max){return num}
        else{alert("Ingrese un numero valido (Del 1 al " + max + ")")}     
        }
}
export function tutorial(){
    const opciones = "1:🎸 2:⚽ 3:🎹"
    alert("Un amigo te pide que le compres un instrumento de percusion para tocar con su banda")
    alert("Que instrumento compras?")
    let cosa = 0 
    const num = (eleccion(3,opciones))
    switch(num){
        case "1": alert("Le entregas la guitarra a tu amigo, al dia siguiente lo echan de su banda");
        cosa = 1
        break;
        case "2": alert("Le entregas la pelota a tu amigo, te mira raro y se va. Nunca mas volvieron a hablar");
        cosa = 2
        break;
        case "3": alert("Le entregas el piano a tu amigo y al dia siguiente toca un concierto con su banda 😁");
        cosa = 3
        break;
    } 
    return cosa
}
//Sistema de vida
export function MenosV(life,cant){
    life = life - cant 
    alert("Perdiste " + cant + " vida/s, te queda/n " + life)
    return life
}
//Inicio
export function Casa(){ //Entrar a la casa
    const opciones= "Deberias entrar? 1:Si 2:No"
    const num = (eleccion(2,opciones))
    switch(num){
        case "1": alert("Ingresas a la casa");
        break;
        case "2": alert("Ingresas de todas formas a la casa porque si no la trama del juego no iniciará");
    }
}
export function PrimerPuerta(){ //Puerta trampa
    const opciones= "Entrar de todas formas? 1:Si 2:No"
    const num = (eleccion(2,opciones))
    let decision = 0
    switch(num){
        case "1": alert("Abres la puerta y caes por un agujero")
        decision=1
        break;
        case "2": alert("Haces caso al cartel y e ignoras la puerta")
        decision=2;
        break
    }
    return decision
}
export function Puertas7(){ //Puzle de 7 puertas
    const opciones= "A cual entrar? (1-7)"
    let decision = 0


    while (decision!==5){
        const num = (eleccion(7,opciones))
        switch(num){
            case "1":  //7
            if (decision==3){
                decision=1
                alert("La manija giró, y la puerta 4 emitió sonido") //4
            } else {
                alert("Primer puerta, está cerrada")
                decision=0
            }
            break;
            case "2": alert("Segunda puerta, cerrada, y ademas tiene una cerradura diferente a las demas puertas");
            break
            case "3": alert("Giras la manija de la puerta 3, pero se escucha algo de la puerta 1"); //1
            decision = 3
            break
            case "4": 
            if (decision==1){
                decision=4
                alert("Giras la cuarta puerta, ahora es la puerta 7 la que hizo ruido") //7
            } else {
            alert("Cuarta puerta, cerrada") 
            decision=0} 
            break
            case "5": 
            if (decision==6){
                alert("La puerta se abre y entras")
                decision=5
            } else{
                alert("Quinta puerta, cerrada")
                if(decision==7){alert("Parece que las puertas se reinician al girar las manijas en orden incorrecto")}
                decision=0    
            }
            break
            case "6": 
            if(decision==7){
                alert("Bien, era esta, solo queda una")
                decision=6
            } else{
                alert("Sexta puerta, cerrada")
                decision=0
            }
            break
            case "7": 
            if (decision==4){
                alert("La manija giró, pero esta vez ninguna puerta sonó")
                alert("Será la 5 o la 6?")
                decision=7
            }else{
                alert("Septima puerta, cerrada")
                decision=0
            }
            
            break
        }
    }
    return decision
} 
export function Puerta2Llave(){ //Buscando que llave es
    const opciones= "Que llave usar? (1-10)"
    let llave = 0
    while (llave!==8){
        const num = (eleccion(10,opciones))
        switch(num){
        case "8": alert("Puerta abierta")
        llave=8
        break
        default: alert("Llave " +num+", no es...")
        break
            }
    }
}
export function EscaparLlave(){  //Buscar llave con cuenta regresiva
    const opciones= "Que llave usar? (1-10)"
    let tiempo = 50
    while (tiempo!==0){
        const num = (eleccion(10,opciones))
        switch(num){
        default: alert("Llave " +num+", no es...")
        tiempo=tiempo-10
        if(tiempo<10){
        alert("Consiguió entrar...")   
        break}
        alert("Quedan " +tiempo+ " segundos!")
        break
            }
    }
}
export function respuesta(){ //Dialogo
    const opciones= "Responder 1:'Porque lo dije al principio del juego' 2:'No tengo idea' "
    const num = (eleccion(2,opciones))
    switch(num){
        case "1": alert("???: No, es porque te conozco");
        break;
        case "2": alert("???: Sé tu nombre porque te conozco");
    }
}
export function PPT(){      //Piedra papel o tijera
    const opciones= "Elige 1:✊🏻 2:✋🏻 3:✌🏻"
    let punt1 = 0
    let punt2 = 0
    let winner = 0
    while (punt1 !==3 && punt2<3 || punt1<3 && punt2!==3){
        const num = (eleccion(3,opciones))       // 1:✊🏻 2:✋🏻 3:✌🏻
        let num2 = Math.floor(Math.random() * 3) // 0:✊🏻 1:✋🏻 2:✌🏻
        switch(num){
            case "1":
                if(num2==2){
                    alert("✊🏻   vs   ✌🏻")
                    punt1 = punt1+1
                    alert(punt1 +" a "+punt2)
                    break
                } else if (num2==1){
                    alert("✊🏻   vs   ✋🏻")
                    punt2 = punt2+1
                    alert(punt1 +" a "+punt2)
                    break
                } else {
                    alert("✊🏻   vs   ✊🏻")
                    alert(punt1 +" a "+punt2)
                    break}
            case "2":
                if(num2==2){
                    alert("✋🏻   vs   ✌🏻")
                    punt2 = punt2+1
                    alert(punt1 +" a "+punt2)
                    break
                } else if (num2==1){
                    alert("✋🏻   vs   ✋🏻")
                    alert(punt1 +" a "+punt2)
                    break
                } else {
                    alert("✋🏻   vs   ✊🏻")
                    punt1 = punt1+1
                    alert(punt1 +" a "+punt2)
                    break
                }
            case "3":
                if(num2==2){
                    alert("✌🏻   vs   ✌🏻")
                    alert(punt1 +" a "+punt2)
                    break
                } else if (num2==1){
                    alert("✌🏻   vs   ✋🏻")
                    punt1 = punt1+1
                    alert(punt1 +" a "+punt2)
                    break
                } else {
                    alert("✌🏻   vs   ✊🏻")
                    punt2 = punt2+1
                    alert(punt1 +" a "+punt2)
                    break
                }
        }
    }
    if (punt1==3){winner=1}else{winner=2}
    return winner
} 
