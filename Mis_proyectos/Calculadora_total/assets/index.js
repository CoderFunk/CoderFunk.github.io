// Mensaje al profesor 
alert("Estimado profesor Diego: Vengo de la generacion G71, nos dijeron que las clases del G81 comenzaban el 23, pero vemos que empezaron el 9, por lo cual le entrego este trabajo con atraso involuntario (ya lo tenia hecho pero lo hice de nuevo.");
// Elementos del DOM para escuchar.
const botonMas = document.querySelector('#mas1-btn');
const botonMenos = document.querySelector('#menos1-btn');
const precioUnidad = 400000;

let precioBase = document.querySelector('.precioBase');
precioBase.innerHTML = precioUnidad;
let cantidadTotal = document.querySelector('.cantidadTotal');
let precioTotal = document.querySelector('.precioTotal');
let cantidad = 0;

// Función para actualizar el precio total.
const actualizarPrecio = (seleccion) => {
  if (seleccion === 'incrementar') {
      cantidad++;
  }
  else if (seleccion === 'disminuir' && cantidad > 0) {
      cantidad--;
  }
  const total = cantidad * precioUnidad;
  // Actualizar DOM con nueva cantidad y unidades totales
  cantidadTotal.innerHTML = cantidad;
  precioTotal.innerHTML = total;
};

// Agrega eventos del click a los botones de agregar y disminuir.
botonMas.addEventListener('click', () => actualizarPrecio('incrementar'));
botonMenos.addEventListener('click', () => actualizarPrecio('disminuir'));