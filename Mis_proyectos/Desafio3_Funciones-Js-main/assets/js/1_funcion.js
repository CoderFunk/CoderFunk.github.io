// Declaración de función // Clasica // Hoisting (buscará los parametros en cualquier parte del codigo)
function declaration (a, b, c){
    return a+b+c+"Declaration!"
    };

resultadoDeclaracion = declaration ("Esto"," es", " Funtion ")

// ejecucion del codigo para ver resultados
console.log(resultadoDeclaracion);



//  función de expresión // Anonima // No hoisting (solo busca los parametos posterior a su declaracion, o error)
let expression = function (d, e, f){
    return d+e+f+"Expression!"
    };

resultadoExpression = expression ("Esto"," es", " Funtion ")

// ejecucion del codigo para ver resultados
console.log(resultadoExpression);