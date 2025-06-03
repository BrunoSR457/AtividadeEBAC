function calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;

    if (operacao === 'soma') {
        resultado = valor1 + valor2;
    } else if (operacao === 'subtracao') {
        resultado = valor1 - valor2;
    } else if (operacao === 'multiplicacao') {
        resultado = valor1 * valor2;
    } else if (operacao === 'divisao') {
        resultado = valor1 / valor2;
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
