function verificarPassword()
{
    // variables
    const digito1 = document.getElementById('dig1').value;
    const digito2 = document.getElementById('dig2').value;
    const digito3 = document.getElementById('dig3').value;
    const password = digito1 + digito2 + digito3;

    const resultado = document.getElementById('resultado');

    // condiciones
    if (password === '911') {
        resultado.innerHTML = 'password 911 es correcto.';
        resultado.style.color = 'white';
    } else if (password === '714') {
        resultado.innerHTML = 'password 714 es correcto.';
        resultado.style.color = 'white';
    } else {
        resultado.innerHTML = 'Password incorrecto';
        resultado.style.color = 'red';
    }
}