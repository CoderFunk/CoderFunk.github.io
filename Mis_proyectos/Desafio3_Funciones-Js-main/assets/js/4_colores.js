// Div 1 Rojo
const divRed = document.getElementById('colorRed');

divRed.addEventListener('click', () => {
    console.log("click Rojo");
    divRed.style.backgroundColor = "black";
})

// Div 2 Azul
const divBlue = document.getElementById('colorBlue');

divBlue.addEventListener('click', () => {
    console.log("click Azul");
    divBlue.style.backgroundColor = "black";
})


// Div 3 Verde
const divGreen = document.getElementById('colorGreen');

divGreen.addEventListener('click', () => {
    console.log("click Verde");
    divGreen.style.backgroundColor = "black";
})


// Div 4 Amarillo
const divYellow = document.getElementById('colorYellow');

divYellow.addEventListener('click', () => {
    console.log("click Amarillo");
    divYellow.style.backgroundColor = "black";
})


// script para refrescar web con boton
function reload () {
    location.reload();
}