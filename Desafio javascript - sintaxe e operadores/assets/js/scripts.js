function analisar(textNum1, textNum2) {
    let num1 = Number(textNum1);
    let num2 = Number(textNum2);
    let resultado = document.getElementById('textResultado');

    if ((!num1 && num1 != 0) || (!num2 && num2 != 0)) {
        return resultado.innerHTML = 'Por favor, informe números válidos!';
    }
    
    const SOMA = num1 + num2;

    if (num1 === num2) {

        if (SOMA > 10 && SOMA < 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são iguais. Sua soma é " + SOMA + ", que é maior que 10 e menor que 20."
        } else if (SOMA > 10 && SOMA > 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são iguais. Sua soma é " + SOMA + ", que é maior que 10 e maior que 20."
        } else if (SOMA === 10) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são iguais. Sua soma é 10, que é igual a 10 e menor que 20."
        } else if (SOMA === 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são iguais. Sua soma é 20, que é maior que 10 e igual a 20."
        } else {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são iguais. Sua soma é " + SOMA + ", que é menor que 10 e menor que 20."
        }

    } else {

        if (SOMA > 10 && SOMA < 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são diferentes. Sua soma é " + SOMA + ", que é maior que 10 e menor que 20."
        } else if (SOMA > 10 && SOMA > 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são diferentes. Sua soma é " + SOMA + ", que é maior que 10 e maior que 20."
        } else if (SOMA === 10) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são diferentes. Sua soma é 10, que é igual a 10 e menor que 20."
        } else if (SOMA === 20) {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são diferentes. Sua soma é 20, que é maior que 10 e igual a 20."
        } else {
            resultado.innerHTML = "Os numeros " + textNum1 + " e " + textNum2 + " são diferentes. Sua soma é " + SOMA + ", que é menor que 10 e menor que 20."
        }

    }
}