// Selección de los elementos del DOM que se van a manipular.
const incrementButton = document.querySelector('#incremento-btn');
const decrementButton = document.querySelector('#decremento-btn');
const unitPrice = 400000;

let priceContainer = document.querySelector('.precioBase');
let totalPrice = document.querySelector('.totalPago');
let quantityContainer = document.querySelector('.cantidad');
let cantidad = 0;

// Función para actualizar el precio total.
const updatePrice = (action) => {
  // Aumenta o disminuye la cantidad según la acción del botón.
  if (action === 'incrementar') {
      cantidad++;
  }

  else if (action === 'disminuir' && cantidad > 0) {
      cantidad--;
  }

  // Calcula el total
  const total = cantidad * unitPrice;

  // Actualiza el DOM con la nueva cantidad y el nuevo total
  quantityContainer.innerHTML = cantidad;
  totalPrice.innerHTML = total;
};

// Agrega eventos del click a los botones de agregar y disminuir.
incrementButton.addEventListener('click', () => updatePrice('incrementar'));
decrementButton.addEventListener('click', () => updatePrice('disminuir'));