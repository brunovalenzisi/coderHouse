let cartas=[1,2,3,4,5,6,7,8,9,10];
let manoJugador1=[];
let manoJugador2=[];
let pesoJugador1=0;
let pesoJugador2=0;
let jugador1="";
let jugador2 = "crupier"
let partidaEnProgreso=false




function iniciarInterface(){
console.clear();
let nuevaPartida=prompt("Desea empezar una nueva partida de consoleBlackJack?(Y/N)");    
if(nuevaPartida.toLowerCase()=="y"){
partidaEnProgreso=true;                           
if(jugador1==""){jugador1=prompt("Ingresa tu nombre");}
console.log("❤️♠️🔶🍀 Que empiece el juego "+ jugador1 + "! ❤️♠️🔶🍀")    
partidaConsoleBlackJack();
}else if(nuevaPartida.toLowerCase()=="n" ){
partidaEnProgreso=false
console.log("❤️♠️🔶🍀 Gracias! vuelva prontosss ❤️♠️🔶🍀")
jugador1=""
}else{
alert("💀💀 ah ah aaahhh..no dijiste las palabras magicas..💀💀")
iniciarInterface();
}
}

function partidaConsoleBlackJack(){
resetearPartida();
empezarJuego();
if(partidaEnProgreso==true){siguienteRonada();}
}

function empezarJuego(){

manoJugador1.push(cartaAlAzar(),cartaAlAzar())
manoJugador2.push(cartaAlAzar(),cartaAlAzar())
evaluar();
mostrarMano(jugador1,manoJugador1,pesoJugador1);
resultado(jugador1)
}

function pedirCarta(mano){
    mano.push(cartaAlAzar());
    
    }

function cartaAlAzar(){
     let min=1
     let max=10
     return Math.floor((Math.random() * (max - min + 1)) + min);
    }

function evaluar(){
    pesoJugador1=contarCartas(manoJugador1);
    pesoJugador2=contarCartas(manoJugador2);
         

   function contarCartas(mano){
    let cantidadDeAs=0
    let acumulado=0
    for(let i=0;i<mano.length;i++){
    if(mano[i]==1){
    cantidadDeAs++;
    continue
    }else{acumulado+=mano[i];}    
     }
   
if(cantidadDeAs>0){
    for(let i =0;i<cantidadDeAs;i++){
        if(acumulado+11+cantidadDeAs-1<=21){
            acumulado+=11
        }else{acumulado++}
    }
    
}
return acumulado
    }

    
   
}

function resetearPartida(){
manoJugador1=[];
manoJugador2=[];
pesoJugador1=0;
pesoJugador2=0;
}

function siguienteRonada(){
   let seguir=prompt("Te plantas??🐔 (Y/N)")
   if(seguir.toLowerCase()=="n"){
   pedirCarta(manoJugador1);
   evaluar();
   mostrarMano(jugador1,manoJugador1,pesoJugador1);
   resultado(jugador1);
   if(partidaEnProgreso==true){siguienteRonada();}

   }else if(seguir.toLowerCase()=="y"){
   plantarse();
   }else{
    alert("💀💀 ah ah aaahhh..no dijiste las palabras magicas..💀💀");
    siguienteRonada();
   }
}

function mostrarMano(player,mano,peso){
    console.log("la mano de " + player + " es: ")
    for(let i=0;i<mano.length;i++){
        console.log("Carta " + (i+1)+":"+mano[i])
    }
    console.log("Suman " + peso+ " puntos")
}



function plantarse(){
    
    
        mostrarMano(jugador2,manoJugador2,pesoJugador2);
        while(pesoJugador2<17){
            confirm("La mano del crupier es menor o igual a 17, pide otra carta");
            pedirCarta(manoJugador2);
            evaluar();
            mostrarMano(jugador2,manoJugador2,pesoJugador2);
            
            }
            resultado(jugador2)
        }
         
    
    
    



function resultado(jugador){
    if (jugador==jugador1){if(manoJugador1.length==2 && pesoJugador1==21){
        partidaEnProgreso=false
        console.log("❤️♠️🔶🍀 Felicitaciones! Conseguiste un BlackJack y ganaste la partida! ❤️♠️🔶🍀")
        confirm("Continuar");     
        iniciarInterface();
            }  else
            if(pesoJugador1==21){
                console.log("Conseguiste 21 puntos, te plantas");
                confirm("Continuar");
                plantarse();
                }
              else if(pesoJugador1>21){
                partidaEnProgreso=false;
                console.log("💀💀 Perdiste! sumaste mas de 21 puntos 💀💀")
                confirm("Continuar");
                iniciarInterface();}}
                
                else if(jugador==jugador2){
                    if(pesoJugador2>21){
                        partidaEnProgreso=false;
                        console.log("El crupier se paso")
                        console.log(" ❤️♠️🔶🍀 Felicitaciones! ganaste la partida! ❤️♠️🔶🍀")
                        confirm("Continuar");
                        iniciarInterface();}
                        else if(pesoJugador1>pesoJugador2){
                            partidaEnProgreso=false;
                            console.log("❤️♠️🔶🍀 Felicitaciones! ganaste la partida! ❤️♠️🔶🍀")
                            confirm("Continuar"); 
                            iniciarInterface();
                        }else if (pesoJugador1<pesoJugador2){
                            partidaEnProgreso=false;
                            console.log("💀💀 Perdiste! El crupier sumo mas puntos 💀💀")
                            confirm("Continuar");
                            iniciarInterface(); 
                            
                        }else if(pesoJugador1==pesoJugador2){
                            partidaEnProgreso=false;
                            console.log("😐La partida resulto en empate😐");
                            confirm("Continuar");
                            iniciarInterface();       
                    }

                }
}
function reglamento(){
    console.log("🃏Bienvenido a ConsoleBlackJack!")
    console.log("🃏El objetivo el sumar 21 o el valor mas cercano posible")
    console.log("🃏Las reglas son sencillas:")
    console.log("🃏Al empezar se te otorgan 2 cartas.")
    console.log("🃏Las cartas van del 1 al 10 y no tienen palo")
    console.log("🃏El 1 vale tanto 1 como 11")
    console.log("🃏Si conseguis sumar 21 con la mano inicial, es la mejor jugada posible, ganas la ronda automaticamente")
    console.log("🃏Podras pedir mas cartas para sumar a tu mano")
    console.log("🃏Pero, cuidado!, si te pasas de 21 perdes la partida")
    console.log("🃏Cuando decidas plantarte, el crupier muestra sus cartas")
    console.log("🃏Si tiene menos de 17 esta obligado a pedir otra carta")
    console.log("🃏Si tiene 17 o mas esta obligado a plantarse")
    console.log("🃏Si el crupier se pasa de 21 puntos, ganas la partida")
    console.log("🃏Una vez que los dos se plantan, se suman los puntos")
    console.log("🃏El jugador con mas puntos gana la ronda")
    alert("Cuando estes listo pulsa Aceptar")
    iniciarInterface()

}
    





    




