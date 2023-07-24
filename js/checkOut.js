nodeCreditos=document.getElementById("creditos")
nodeNombre=document.getElementById("nombre")
nodeTarjeta=document.getElementById("tarjeta")
nodeCaducidad=document.getElementById("caducidad")
nodeCVV=document.getElementById("cvv")


function acreditar(){
    if(nodeCreditos != ""){
    localStorage.setItem("acreditar",parseInt(nodeCreditos.value))
    window.location = './index.html'
    }
}
    
    
    