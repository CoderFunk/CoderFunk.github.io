function verificarPassword()
{
    const digito1 = document.getElementById('dig1').value;
    const digito2 = document.getElementById('dig2').value;
    const digito3 = document.getElementById('dig3').value;
    const password = digito1 + digito2 + digito3;

    const resultado = document.getElementById('resultado');

    // condiciones
    if (password === '911') {
        resultado.innerHTML = '911<p>El Password 1 es correcto.</p>';
        resultado.style.color = 'blue';
    } else if (password === '714') {
        resultado.innerHTML = '714 <p>El password 2 es correcto.';
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = 'Password incorrecto';
        resultado.style.color = 'red';
    }
}