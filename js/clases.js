
class Maso {
    cartas=[];
    constructor (joker){
        
        for(let i=1, c=1;i<14;i++,c++){
            this.cartas[i-1]=new Carta("picas",c,c,`../cartas/picas/${c}.png`);
            }
        for(let i=14,c=1;i<27;i++,c++){
            this.cartas[i-1]=new Carta("corazones",c,c,`../cartas/corazones/${c}.png`);
            }
        for(let i=27,c=1;i<40;i++,c++){
            this.cartas[i-1]=new Carta("diamantes",c,c,`../cartas/diamantes/${c}.png`);
            }
        for(let i=40,c=1;i<53;i++,c++){
            this.cartas[i-1]=new Carta("trebol",c,c,`../cartas/trebol/${c}.png`);
            }
        if(joker){this.cartas.push(new Carta("joker","j",100,`../cartas/joker/1.png`))
                this.cartas.push(new Carta("joker","j",100,`../cartas/joker/1.png`))}
         
                    
    }
    sacarCarta(){

            //genera un numero aleatorio comprendido en el total de cartas del maso actual
            let min=1
            let max=this.cartas.length
            let cartaRandom=Math.floor((Math.random() * (max - min + 1)) + min);
            let carta=this.cartas[cartaRandom]
            this.cartas.splice(cartaRandom,1)
            return carta


           }
    }


class Carta{
        palo
        id
        imagen=new Image
        srcImagen
        srcDorso="../cartas/joker/2.png"
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
            this.imagen.src=src
        
            if(p=="picas" || p=="trebol"){
                this.color="negro"
            }
            else if(p=="corazones" || p=="diamantes"){
                this.color="rojo"
            }
            
        }
        
        girar(){
            if(this.cara==false){
            this.cara=true
            this.imagen.src=this.srcImagen}
            else if(this.cara==true){this.cara=false
            this.imagen.src=this.srcDorso}
        }
        }
    
    
