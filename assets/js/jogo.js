//Variáveis
const pedra = document.querySelector('.pedra');


// Variáveis Imagens
const span_joga = document.querySelector('.span_jogador');
const span_com = document.querySelector('.span_comp');

// Variáveis do Placar
const placarJogador = document.querySelector('.pontos_jogador');
const placarComp = document.querySelector('.pontos_comp');


// Lista dos itens
const opcoes = new Array(
    'Pedra',
    'Papel',
    'Tesoura'
);



// Lógica do jogo
let computador = Math.floor(Math.random() * 2);
console.log(`O computador colocou: ${opcoes[computador]}`);
console.log(`O Jogador colocou: ${opcoes[jogador]}`);

// Função do Jogo
function jogar(){
    
    if(computador == 0){ // Pedra ( Computador )
        if(jogador == 0){ // Pedra
            console.log('Deu empate');
        } else if( jogador == 1){ //Papel
            console.log('Jogador Ganhou!');
        } else if (jogador == 2){ // Tesoura
            console.log('Computador Ganhou!');
        }
    }

    if(computador == 1){ // Papel ( Computador )
        if(jogador == 0){ // Pedra
            console.log('Computador Ganhou!');
        } else if (jogador == 1){ // Papel
            console.log('Deu empate');
        } else if(jogador == 2){ // Tesoura
            console.log('Jogador Ganhou!');
        }
    }

    if(computador == 2){ // Tesoura ( Computador )
        if(jogador == 0){ // Pedra
            console.log('Jogador Ganhou!');
        } else if(jogador == 1){ // Papel
            console.log('Computador Ganhou!');
        } else if(jogador == 2){ // Tesoura
            console.log('Deu empate')
        }
    }

}