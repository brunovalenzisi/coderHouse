nodeCreditos=document.getElementById("creditos")
nodeNombre=document.getElementById("nombre")
nodeTarjeta=document.getElementById("tarjeta")
nodeCaducidad=document.getElementById("caducidad")
nodeCVV=document.getElementById("cvv")


function acreditar(){
    if(nodeCreditos.value != ""){
    localStorage.setItem("acreditar",parseInt(nodeCreditos.value))
     
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por elegirnos!',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    
    window.location = './index.html'
});
    }
}
    
    
    