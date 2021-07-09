// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo(cor){
    if(cor == 'verde'){
        return 'Siga em frente';
    }
    if(cor == 'amarelo'){
        return 'Reduza a velocidade';
    }
    if(cor == 'vermelho'){
        return 'Pare';
    }
}
const sinal = semaforo('amarelo')
console.log(sinal)