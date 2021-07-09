// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(num){
    return num*0.05;
}

const valor = 300;
console.log(`Desconto de 5% no valor de ${valor} é equivalente a ${desconto(valor)}`);