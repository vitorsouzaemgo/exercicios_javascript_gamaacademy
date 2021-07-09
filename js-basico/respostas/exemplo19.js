// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.
// Cotação do dia 1 Dólar americano igual a 5,26 Real brasileiro

const valor = 15

function conversor(real){
    return real * (1/5.26);
}

console.log(`${valor} reais é equivalente a ${conversor(valor)} dólares`);