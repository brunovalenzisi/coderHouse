window.addEventListener("load",cargarPagina,false)
let nodeCreditos=document.getElementById("creditos")  

function cargarPagina(){
let mesaPrevia=JSON.parse(localStorage.getItem("mesaPrevia"))
nodeCreditos.max=mesaPrevia.cdts
nodeCreditos.value=mesaPrevia.cdts
}

function cash(){
    localStorage.setItem("acreditar",-parseInt(nodeCreditos.value))
     
    Swal.fire({
    title: 'Gracias por elegirnos! Un gestor se pondra en contacto para coordinar el pago',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
      
    }
  }
  ).then(() => {
    
    window.location = './index.html'
});
 }

