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
let nodeCdts=document.getElementById("cdts")









function pantallaInicial(){

mesa=new Mesa
crearBoton("Comenzar Partida")
actualizarNodeCdts(1000)
}



function pedir(mano){
    if(!mesa.manos[mano-1].cerrada && mesa.abierta && mesa.enJuego){
    mesa.manos[mano-1].puedeDoblar=false   
    mesa.entregarCarta(mano,maso,true)
    mesa.manos[mano-1].cerrarApuesta()
    mesa.manos[mano-1].contarCartas(21);
    resultadoParcial(mesa.manos[mano-1]);
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
    function resultadoParcial(mano){
        let manosCerradas=0 
        if(mano.id<4 && mano.peso>0){ 
        if(mano.cartas.length==2 && mano.peso==21){
            mano.blackJack=true
            mano.cerrar()
            }  else
                if(mano.peso==21){
                    console.log("Conseguiste 21 puntos, te plantas");
                    mano.cerrar()
                    }
                  else if(mano.peso>21){
                    mano.cerrar()
                    }
                    
                  mesa.manos.forEach(mano => {if(mano.cerrada){manosCerradas++}
                  });
                  if(manosCerradas==4){
                    setTimeout(() => {
                      nodeMesa.removeChild(document.getElementById("puntero"))
                        }, 2);
                    resultadoFinal()}
        }
      }
                  
        
                    
                    function resultadoFinal(){
                      mesa.cerrar()
                      jugadaCrupier()
                      mesa.manos.forEach(mano => {
                        if(mano.id<4 && mano.peso>0){
                          if(mano.peso>21){
                          console.log("💀💀 Perdiste! sumaste mas de 21 puntos 💀💀")
                          }
                          else if(mano.blackJack && !mesa.manos[3].blackJack){
                            console.log(" ❤️♠️🔶🍀 Felicitaciones! conseguiste un blackJack y ganaste la partida! paga 3 a 2 ❤️♠️🔶🍀")
                            mesa.cdts+=(mano.apuestaCerrada+mano.apuestaCerrada*2.5)
                          }
                          else if(mano.blackJack && mesa.manos[3].blackJack){
                            console.log(" ❤️♠️🔶🍀 Felicitaciones! conseguiste un blackJack y ganaste la partida! paga 1 a 1 ❤️♠️🔶🍀")
                            mesa.cdts+=(2*mano.apuestaCerrada)
                          }
  
                          else if(mesa.manos[3].peso>21 && mano.peso<=21){
                              console.log("El crupier se paso")
                              console.log(" ❤️♠️🔶🍀 Felicitaciones! ganaste la partida! paga 1 a 1 ❤️♠️🔶🍀")
                              mesa.cdts+=(2*mano.apuestaCerrada)
                               }
  
                       else if(mano.peso>mesa.manos[3].peso){
                                  console.log("❤️♠️🔶🍀 Felicitaciones! ganaste la partida! ❤️♠️🔶🍀 paga 1 a 1")
                                  mesa.cdts+=(2*mano.apuestaCerrada)
                                  }
                                  
                                  else if (mano.peso<mesa.manos[3].peso){
                                  console.log("💀💀 Perdiste! El crupier sumo mas puntos 💀💀")
                                 }
                              else if(mano.peso==mesa.manos[3].peso){
                                  console.log("😐La partida resulto en empate😐");
                                  mesa.cdts+=mano.apuestaCerrada
                                  }
                        }
                        
                       });
                       
                      actualizarNodeCdts()
                      mesa.terminarRonda()
                      if(!document.getElementById("botonIniciar")){crearBoton("Siguiente ronda")}
                      
                      }
                            
    function plantarse(mano){
      if(mesa.abierta && mesa.enJuego){
        if(!mesa.manos[mano].cerrada){
          mesa.manos[mano].cerrar()
          resultadoParcial(mesa.manos[mano])
          siguiente()
          }
        
      }
      
    }
                    
    


    function jugadaCrupier(){   // a partir de aqui, comienza a jugar el programa
      mesa.manos[3].cartas[0].girar()
      if(mesa.manos[3].peso==21){
        mesa.manos[3].blackJack=true
      }
    while(mesa.manos[3].peso<17){  // el ciclo termina cuando se cumpla la condicion del reglamneto del juego
            mesa.entregarCarta(4,maso,true);
            mesa.manos[3].contarCartas(17);
            }
        }
        
   
   


       
   

     //inicializa las variables
     function resetearPartida(){ 
      mesa.cerrar()     
      mesa.limpiarMesa()
      maso=new Maso
        
        }
        


        function partidaConsoleBlackJack(){          //es la funcion principal del programa
            
            nodeMesa.removeChild(document.getElementById("botonIniciar"))
            mesa.empezarRonda()
            seleccionarApuesta(0)
            resetearPartida();
            }


  function empezarJuego(){    //reparte las cartas y evalua la primera mano
   
  if(mesa.manos.some((mano)=>mano.cerrada==false) && !mesa.manos.some((mano)=>mano.peso>0) && mesa.enJuego ){
   mesa.abrir()
    mesa.manos.forEach(mano => {
      if(!mano.cerrada){
      mano.puedeDoblar=true  
      mano.cerrarApuesta()
      mesa.entregarCarta(mano.id,maso,true)
                    setTimeout(() => {
                    mesa.entregarCarta(mano.id,maso,true);
                    mano.contarCartas(21)    
                      }, 800);
    }
      
    });
                    
                      setTimeout(() => {
                        mesa.entregarCarta(4,maso,false)    
                          }, 1600);
                          setTimeout(() => {
                            mesa.entregarCarta(4,maso,true)    
                              }, 2400);
                              setTimeout(() => {
                                
                               }, 3000);  

                               seleccionApuesta=(mesa.manos.find((mano)=>mano.apuestaCerrada>0)).id-1
                               seleccionarApuesta(seleccionApuesta)
                               crearPuntero(seleccionApuesta)          
                                resultadoParcial(mesa.manos[seleccionApuesta])
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
  if(!mesa.abierta && mesa.enJuego){
    crearPuntero(mano)
    seleccionApuesta=mano
  }

  
}

function siguiente(){

    do{
      seleccionApuesta++
      crearPuntero(seleccionApuesta)
    } while(seleccionApuesta<2 && mesa.manos[seleccionApuesta].apuestaCerrada==0)
  }
  
  

function apostar(apuesta,mano){
  if(mesa.cdts>=apuesta && mesa.manos[mano].apuestaCerrada==0 && !mesa.abierta && mesa.enJuego){
    let nodo=document.getElementById(`apuestaMano${mano+1}`)
    mesa.manos[mano].abrir()
    mesa.manos[mano].sumarApuesta(apuesta)
    nodo.innerHTML=mesa.manos[mano].apuestaCerrada + mesa.manos[mano].apuestaAbierta + "<br>Cdts"
    actualizarNodeCdts()
  }
  
  }


 function doblar(mano){
  if(mesa.manos[mano].puedeDoblar && mesa.abierta && mesa.manos[mano].apuestaCerrada*2<=mesa.cdts){
    mesa.manos[seleccionApuesta].doblarApuesta()
    let nodo=document.getElementById(`apuestaMano${mano+1}`)
    nodo.innerHTML=mesa.manos[mano].apuestaCerrada + mesa.manos[mano].apuestaAbierta + "<br>Cdts"
    actualizarNodeCdts()
    pedir(mano+1)
    plantarse(mano)
   }
  
 } 

 function actualizarNodeCdts(){
  nodeCdts.textContent=`${mesa.cdts} cdts`
    }

    function crearPuntero(mano){
      if(document.getElementById("puntero")){
        let punteroViejo=document.getElementById("puntero")
        nodeMesa.removeChild(punteroViejo)
}
      let puntero=document.createElement("div")
      puntero.classList.add(`puntero${mano}`)
      puntero.id="puntero"
      nodeMesa.appendChild(puntero)
      puntero.classList.add("animate__animated")
      puntero.classList.add("animate__bounce")
      puntero.classList.add("animate__infinite")
    }







 






    




