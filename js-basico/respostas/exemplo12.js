// Crie uma função que determina se um número é par ou impar.

function paridade(num){
    return num%2==0 ? 'par':'ímpar';
}

const numero = 5;
console.log(`O número é`, paridade(numero));