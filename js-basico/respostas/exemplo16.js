// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6

function fatorial(num){
    for(let i=num-1;i>0;i--){
        num *= i;
    }
    return num;
}

const num = 5;
console.log(`O fatorial de ${num} é ${fatorial(num)}`);