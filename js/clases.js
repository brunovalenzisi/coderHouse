
class Maso {
    cartas=[];
    constructor (joker){
        
        for(let i=0, c=1;i<13;i++,c++){
            this.cartas[i]=new Carta("picas",c,c,`./cartas/picas/${c}.png`);
            }
        for(let i=13,c=1;i<26;i++,c++){
            this.cartas[i]=new Carta("corazones",c,c,`./cartas/corazones/${c}.png`);
            }
        for(let i=26,c=1;i<39;i++,c++){
            this.cartas[i]=new Carta("diamantes",c,c,`./cartas/diamantes/${c}.png`);
            }
        for(let i=39,c=1;i<52;i++,c++){
            this.cartas[i]=new Carta("trebol",c,c,`./cartas/trebol/${c}.png`);
            }
        if(joker){this.cartas.push(new Carta("joker","j",100,`./cartas/joker/1.png`))
                this.cartas.push(new Carta("joker","j",100,`./cartas/joker/1.png`))}
         
                    
    }
    sacarCarta(){

            //genera un numero aleatorio comprendido en el total de cartas del maso actual
            if(this.cartas.length>0){
            let min=0
            let max=this.cartas.length-1
            let cartaRandom=Math.floor((Math.random() * (max - min + 1)) + min);
            let carta=this.cartas[cartaRandom]
            this.cartas.splice(cartaRandom,1)
            return carta
           }
            }
            
    }


class Carta{
        palo
        id
        srcImagen
        srcDorso="./cartas/joker/2.png"
        valor=[]
        color
        cara=true
        constructor(p,id,val,src){
            this.palo=p
            
            if(id>=1 && id<=10){this.id=`${id}-${this.palo}`}
            else if(id==11){this.id=`J-${this.palo}`}
            else if(id==12){this.id=`Q-${this.palo}`}
            else if(id==13){this.id=`K-${this.palo}`}
            else if(p=="joker"){this.id=p}
            else if(p=="dorso"){this.id=p}
            
            if(val==1){this.valor=[1,11]}
            else if(val>1 && val<=10){this.valor=[val]}
            else if(val>=11 && val<=13){this.valor=[10]}
            this.srcImagen=src
            
        
            if(p=="picas" || p=="trebol"){
                this.color="negro"
            }
            else if(p=="corazones" || p=="diamantes"){
                this.color="rojo"
            }
            
        }
        
        girar(){
            if(this.cara==true){
            this.cara=false
            let elemento=document.getElementById(this.id)
            elemento.style.backgroundImage=`url(${this.srcDorso})`
            elemento.classList.add("animate__animated")
            elemento.classList.add("animate__flip")
            setTimeout(() => {elemento.classList.remove("animate__animated")
                              elemento.classList.remove("animate__flip")}, 1500);
              }
            else if(this.cara==false){
            this.cara=true
            let elemento=document.getElementById(this.id)
            elemento.style.backgroundImage=`url(${this.srcImagen})`
            elemento.classList.add("animate__animated")
            elemento.classList.add("animate__flip")
            setTimeout(() => {elemento.classList.remove("animate__animated")
                              elemento.classList.remove("animate__flip")}, 1500);
            }
        }
        }
    
    class Mesa{
    cdts=1000    
    manos=[]
    abierta
    enJuego
    constructor(){
    this.manos=[new Mano(1),new Mano(2),new Mano(3),new Mano(4)]
    this.abierta=false
    this.enJuego=false
    }
        entregarCarta(mano,baraja,cara){
            if(baraja.cartas.length>0){
            let nCartas
            let div
            let nuevaCarta=baraja.sacarCarta()
            
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
                        nuevoDiv.style.backgroundImage=`url(${nuevaCarta.srcImagen})`       
                    }else if(!cara){
                        nuevaCarta.cara=false
                        nuevoDiv.style.backgroundImage=`url(${nuevaCarta.srcDorso})`
                    }
                    
                    
                    if(mano==1){
                       nCartas=this.manos[0].cartas.length
                       nuevoDiv.style.left=`${(nCartas-1)*30}%`
                       nuevoDiv.classList.add("animate__animated")    // ToDo:convertir a la funcion animarElemento
                       nuevoDiv.classList.add("animate__backInLeft")
                       setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                                         nuevoDiv.classList.remove("animate__backInLeft")}, 1000);
                       
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
                        nuevoDiv.classList.add("animate__backInRight")
                        setTimeout(() => {nuevoDiv.classList.remove("animate__animated")
                        nuevoDiv.classList.remove("animate__backInRight")}, 1000);
                        
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
                
            this.manos.forEach(mano => {mano.alMaso()
                
            }); 
            }                
abrir(){this.abierta=true}
cerrar(){this.abierta=false}
empezarRonda(){this.enJuego=true}
terminarRonda(){this.enJuego=false}
        }

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
            
        

        
    
    
