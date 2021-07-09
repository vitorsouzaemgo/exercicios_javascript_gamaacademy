// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function imc(altura, massa){
    return massa/(altura*altura);
}

const altura = 1.7;
const massa = 70;
console.log(`O IMC é`, imc(altura,massa));