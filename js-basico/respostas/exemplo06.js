// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, 
// por quanto devo vendê-lo descontando 25%?

function desc(valor){
    return valor*0.75;
}

console.log(`Deve ser vendido por R$${desc(3000)}`)