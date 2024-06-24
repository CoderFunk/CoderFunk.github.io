// parrafo 1 sin fondo, click para fondo amarillo
function pintar(){
    ele1.style.backgroundColor = 'yellow'
    }
    const ele1 = document.getElementById("ele1")
    ele1.addEventListener("click", pintar);




// parrafo 2 fondo verde, click para fondo amarillo
function pintar2(){
    ele2.style.backgroundColor = 'yellow'
    }
    const ele2 = document.getElementById("ele2")
    ele2.addEventListener("click", pintar2);

fondoVerder = document.getElementById("ele2").style.backgroundColor = 'green';





// script para refrescar web con boton
function refrescarPag () {
    location.reload();
}