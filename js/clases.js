//esta clase contiene las cartas utilizadas en la partida
class Maso {
    cartas=[];//contiene todas las cartas jugables
    dorso;
    constructor (joker){ //el parametro joker es un booleano que se setea en true si se quiere generar un maso con jocker
        fetch("./js/cartas.json") //se utiliza el fetch para esperar la carga del Json conteniendo toda la informacion de las cartas
        .then(response=>response.json())
        .then(response=>response.forEach(carta =>{this.cartas.push(new Carta(carta));
           })
           ).then(
            fetch("./js/cartasComplementarias.json")
           .then(response=>response.json())
           .then(response=>this.dorso=new Carta(response[0])))

        if(joker){
            fetch("./js/cartasComplementarias.json")
            .then(response=>response.json())
            .then(response=>this.cartas.push(new Carta(response[1]),new Carta(response[1])))

        }   
           
              
        
    }
//retorna una carta del maso al azar
sacarCarta(){
            if(this.cartas.length>0){
            let min=0
            let max=this.cartas.length-1
            let cartaRandom=Math.floor((Math.random() * (max - min + 1)) + min); //genera un numero aleatorio comprendido en el total de cartas del maso actual
            let carta=this.cartas[cartaRandom]
            this.cartas.splice(cartaRandom,1)
            return carta
           }
            }
        }
            
    

//Esta clase describe una carta
class Carta{
        palo
        id
        img
        valor=[]
        color
        cara=true
        constructor(cartaMolde){
            this.palo=cartaMolde.palo
            this.id=cartaMolde.id
            this.valor=cartaMolde.valor
            this.color=cartaMolde.color
            this.cargarImagen(cartaMolde.src) 
        }
        
        girar(){
            if(this.cara==true){
            this.cara=false
            let elemento=document.getElementById(this.id)
            elemento.style.backgroundImage=`url(${mesa.maso.dorso.img.src})`
            elemento.classList.add("animate__animated")
            elemento.classList.add("animate__flip")
            setTimeout(() => {elemento.classList.remove("animate__animated")
                              elemento.classList.remove("animate__flip")}, 1500);
              }
            else if(this.cara==false){
            this.cara=true
            let elemento=document.getElementById(this.id)
            elemento.style.backgroundImage=`url(${this.img.src})`
            elemento.classList.add("animate__animated")
            elemento.classList.add("animate__flip")
            setTimeout(() => {elemento.classList.remove("animate__animated")
                              elemento.classList.remove("animate__flip")}, 1500);
            }
        }

        //este metodo hace un fetch de la url de la imagen (alojada en el servidor) contenida en el Json, 
        //para poder cargarla en la memoria del navegador y de esta forma no tener que esperar la descarga cada vez que se solicita una carta nueva. 
        cargarImagen(src){ 
            fetch(src)
            .then(response => response.blob())
            .then(blob => {
              const url = URL.createObjectURL(blob); // crear una URL de la imagen alojada en la memoria. 
              this.img = new Image
              this.img.src = url;
              actualizarBarraDeProgreso()
           });
        }

        }
    //Esta clase contiene a todo lo necesario para la partida.
    class Mesa{
    maso
    cdts=0  
    manos=[]
    abierta
    enJuego
    seleccionApuesta=0
    constructor(){
    this.maso=new Maso()    
    this.manos=[new Mano(1),new Mano(2),new Mano(3),new Mano(4)]
    this.abierta=false
    this.enJuego=false
    }
         //este metodo se ocupa de Sacar una carta del maso, agregar la misma en la mano correspondiente, agregarla al DOM y renderizarlo en pantalla 
        entregarCartaRandom(mano,baraja,cara){
            if(baraja.cartas.length>0){
            let nCartas
            let div
            let nuevaCarta
            nuevaCarta=baraja.sacarCarta()
            
            
            if(mano==1){
                div= document.getElementById("mano1")
                this.manos[0].cartas.push(nuevaCarta)
                this.manos[0].abrir()
                
            }
                else if(mano==2){
                    div= document.getElementById("mano2")
                    this.manos[1].cartas.push(nuevaCarta)
                    this.manos[1].abrir()
                    
                }
            else if(mano==3){
                div= document.getElementById("mano3")
                this.manos[2].cartas.push(nuevaCarta)
                this.manos[2].abrir()
                
               }
            else if(mano==4){
                div= document.getElementById("mano4")
                this.manos[3].cartas.push(nuevaCarta)
                
               }

                    let nuevoDiv=document.createElement("div")
                    nuevoDiv.setAttribute("id",`${nuevaCarta.id}`)
                    if(cara){
                        nuevoDiv.style.backgroundImage=`url(${nuevaCarta.img.src})`       
                    }else if(!cara){
                        nuevaCarta.cara=false
                        nuevoDiv.style.backgroundImage=`url(${mesa.maso.dorso.img.src})`
                    }
                    
                    
                    if(mano==1){
                       nCartas=this.manos[0].cartas.length
                       nuevoDiv.style.left=`${(nCartas-1)*30}%`
                       nuevoDiv.classList.add("animate__animated")    
                       nuevoDiv.classList.add("animate__backInDown")
                       setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                                         nuevoDiv.classList.remove("animate__backInDown")}, 1000);
                       
                    }
                        else if(mano==2){
                        nCartas=this.manos[1].cartas.length
                        nuevoDiv.style.left=`${(nCartas-1)*30}%`
                        nuevoDiv.classList.add("animate__animated")
                        nuevoDiv.classList.add("animate__backInDown")
                        setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                                         nuevoDiv.classList.remove("animate__backInDown")}, 1000);
                       
                    }
                    else if(mano==3){
                        nCartas=this.manos[2].cartas.length
                        nuevoDiv.style.left=`${(nCartas-1)*30}%`
                        nuevoDiv.classList.add("animate__animated")
                        nuevoDiv.classList.add("animate__backInDown")
                        setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                        nuevoDiv.classList.remove("animate__backInDown")}, 1000);
                        
                    }
                    else if(mano==4){
                        nCartas=this.manos[3].cartas.length
                        nuevoDiv.style.left=`${(nCartas-1)*30}%`
                        nuevoDiv.classList.add("animate__animated")
                        nuevoDiv.classList.add("animate__backInDown")
                        setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                        nuevoDiv.classList.remove("animate__backInDown")}, 1000);
                        
                    }

                        nuevoDiv.classList.add("carta")
                        div.appendChild(nuevoDiv)
                        }   
                        }
            limpiarMesa(){
            nodeMano1.innerHTML = '';
            nodeMano2.innerHTML = '';
            nodeMano3.innerHTML = '';
            nodeMano4.innerHTML = '';
            nodeApuestaMano1.innerHTML="0<br>Cdts"
            nodeApuestaMano2.innerHTML="0<br>Cdts"
            nodeApuestaMano3.innerHTML="0<br>Cdts" 
                
            this.manos.forEach(mano => {
                mano.alMaso()
                
            }); 
            }                
abrir(){this.abierta=true}
cerrar(){this.abierta=false}
empezarRonda(){this.enJuego=true}
terminarRonda(){this.enJuego=false}
        }
        //Esta clase contiene las cartas de cada mano 
        class Mano{
            cartas=[]
            peso
            id
            cerrada
            blackJack
            apuestaAbierta
            apuestaCerrada
            puedeDoblar
            
            constructor(id){
                this.cartas=[]
                this.peso=0
                this.id=id
                this.cerrada=true
                this.apuestaAbierta=0
                this.apuestaCerrada=0
                this.blackJack=false
                
            }
            alMaso(){
                this.peso=0
                this.cartas.forEach(carta => {mesa.maso.cartas.push(carta)
                 });
                this.cartas=[]
                this.apuestaAbierta=0
                this.apuestaCerrada=0
                this.cerrada=true
                this.blackJack=false

            }
        

            contarCartas(){  //funcion auxiliar de evaluar, suma los puntos de una mano deseada
                let cantidadDeAs=0
                let acumulado=0
                for(let i=0;i<this.cartas.length;i++){
                if(this.cartas[i].valor[0]==1){
                cantidadDeAs++;
                continue   // si la carta actual es uno, suma una unidad al contador de ases y continua el ciclo para evaluarlos al final
                }else{acumulado+=this.cartas[i].valor[0];}    
                 }
               
            if(cantidadDeAs>0){   //elvalua los 1 y les da el valor adecuado a la mano actual
                for(let i =0;i<cantidadDeAs;i++){
                    if(acumulado+11+cantidadDeAs-1<=21){
                        acumulado+=11
                    }else{acumulado++}
                }
                
            }
            this.peso=acumulado
                }
                cerrar(){
                    this.cerrada=true
                }
                abrir(){
                    this.cerrada=false
                }

                sumarApuesta(cantidad){
                this.apuestaAbierta+=cantidad
                mesa.cdts-=cantidad
                }

                cerrarApuesta(){
                    this.apuestaCerrada+=this.apuestaAbierta
                    this.apuestaAbierta=0
                }

                doblarApuesta(){
                    mesa.cdts-=this.apuestaCerrada
                    this.apuestaCerrada=2*this.apuestaCerrada
                    this.puedeDoblar=false
                }
            
            }
            
        

        
    
    
