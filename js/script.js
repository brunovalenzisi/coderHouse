window.addEventListener("load",pantallaInicial,false)
let maso;
let mesa;
let seleccionApuesta=0

let nodeMesa=document.getElementById("mesa")
let nodeMano1=document.getElementById("mano1")
let nodeMano2=document.getElementById("mano2")
let nodeMano3=document.getElementById("mano3")
let nodeMano4=document.getElementById("mano4")
let node10=document.getElementById("apostar10")
let node100=document.getElementById("apostar100")
let node500=document.getElementById("apostar500")
let node1000=document.getElementById("apostar1000")
let nodeApuestaMano1=document.getElementById("apuestaMano1")
let nodeApuestaMano2=document.getElementById("apuestaMano2")
let nodeApuestaMano3=document.getElementById("apuestaMano3")







function pantallaInicial(){
mesa=new Mesa
crearBoton("Comenzar Partida")
}



function pedir(mano){
    if(mesa.manos[mano-1].peso<21){
    mesa.entregarCarta(mano,maso,true)
    evaluar();
    resultado(1,mesa.manos[mano-1]);
    }
    
    }


    const animarClase = (element, animation, prefix = 'animate__') =>
  
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.getElementById(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });



 // evalua la situacion de la partida en diferentes estados de la misma, se utiliza el parametro jugador para definir estos estados.
    function resultado(jugador,mano){ 
        if(mano.id<4 && mano.peso>0){ 
        if (jugador==1){if(mano.cartas.length==2 && mano.peso==21){
            console.log("❤️♠️🔶🍀 Felicitaciones! Conseguiste un BlackJack y ganaste la partida! ❤️♠️🔶🍀")
           mano.cerrar()     
            }  else
                if(mano.peso==21){
                    console.log("Conseguiste 21 puntos, te plantas");
                    mano.cerrar() 
                    plantarse();
                    }
                  else if(mano.peso>21){
                    console.log("💀💀 Perdiste! sumaste mas de 21 puntos 💀💀")
                    mano.cerrar() 
                    }}
                    
                    else if(jugador==2){
                        if(mesa.manos[3].peso>21){
                            console.log("El crupier se paso")
                            console.log(" ❤️♠️🔶🍀 Felicitaciones! ganaste la partida! ❤️♠️🔶🍀")
                             
                            }
                            else if(mano.peso>mesa.manos[3].peso){
                                console.log("❤️♠️🔶🍀 Felicitaciones! ganaste la partida! ❤️♠️🔶🍀")
                                }else if (mano.peso<mesa.manos[3].peso){
                                console.log("💀💀 Perdiste! El crupier sumo mas puntos 💀💀")
                                
                                
                                
                            }else if(mano.peso==mesa.manos[3].peso){
                                console.log("😐La partida resulto en empate😐");
                                
                                }
                    }
                            
    
                    }
    }


    function plantarse(){   // a partir de aqui, comienza a jugar el programa
      mesa.manos[3].cartas[0].girar()
    while(mesa.manos[3].peso<17){  // el ciclo termina cuando se cumpla la condicion del reglamneto del juego
            
            
            mesa.entregarCarta(4,maso,true);
            evaluar();
            }
            for(let i=0;i<3;i++){
                resultado(2,mesa.manos[i])
            } // el hecho de que salga del ciclo implica el fin definitivo de la mano actual
        }
   
   
        function siguienteRonada(){     // es un ciclo que termina cuando uno decide plantarse invocando la funcion "plantarse()"
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

         //actualiza las variables
    function evaluar(){ 
    mesa.manos.forEach(mano =>mano.contarCartas());           
     }

     //inicializa las variables
     function resetearPartida(){       
      mesa.limpiarMesa()
      maso=new Maso
        
        }
        


        function partidaConsoleBlackJack(){          //es la funcion principal del programa
            nodeMesa.removeChild(nodeMesa.lastChild)
            resetearPartida();
            }


            function empezarJuego(){    //reparte las cartas y evalua la primera mano

                mesa.entregarCarta(1,maso,true)
                setTimeout(() => {
                mesa.entregarCarta(1,maso,true)    
                  }, 800);
                  setTimeout(() => {
                    mesa.entregarCarta(4,maso,false)    
                      }, 1600);
                      setTimeout(() => {
                        mesa.entregarCarta(4,maso,true)    
                          }, 2400);
                          setTimeout(() => {
                            evaluar();
                            mesa.manos.forEach(mano => resultado(1,mano));     
                              }, 3000);  
                
                
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
function crearBoton(texto){
  let botonIniciar=document.createElement("h1")
    botonIniciar.classList.add("botonIniciar")
    botonIniciar.id="botonIniciar"
    botonIniciar.innerHTML=texto
    botonIniciar.addEventListener("click",partidaConsoleBlackJack,false)
    nodeMesa.appendChild(botonIniciar)
    animarClase(botonIniciar.id,"bounce")
}

function seleccionarApuesta(mano){
  seleccionApuesta=mano
}

function apostar(apuesta,mano){
  let nodo=document.getElementById(`apuestaMano${mano+1}`)
  if(mesa.manos[mano].cerada){mesa.manos[mano].abrir()}
  mesa.manos[mano].sumarApuesta(apuesta)
  nodo.innerHTML=mesa.manos[mano].apuestaAbierta + "<br>cdts"
  
    
  }
  

    







 






    




