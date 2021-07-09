// Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function conversor(celsius){
    return (celsius*9/5)+32;
}

const valorCelsius = 25;
console.log(`O valor em Fahrenheit é ${conversor(valorCelsius)}`);