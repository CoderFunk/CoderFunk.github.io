let suma1 = function(a, b){
    return 'Esto es una ' + a + b
    }
console.log(suma1('funcion', ' Anonima común'));


// Transformacion a Funcion Flecha
let suma2 = (a, c) => 'Esto es una ' + (a+c);
console.log(suma2('funcion', ' de Flecha, en una linea.'));