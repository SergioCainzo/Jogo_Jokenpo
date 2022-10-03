// Variáveis do Jogo
const pedra = document.querySelector('.pedra');
const papel = document.querySelector('.papel');
const tesoura = document.querySelector('.tesoura');

// Exibição do resultado
let textoJogador = document.querySelector('.span_jogador');
let textoComputador = document.querySelector('.span_comp');


// Placar do jogo
let placarJogador = document.querySelector('.placar_jogador');
let placarComp = document.querySelector('.placar_comp');

// Variável da condição
let jogador = 0;
let jogador1 = 1;
let jogador2 = 2;

//Escolha do jogo do player
pedra.addEventListener('click', jogar);
papel.addEventListener('click', jogar);
tesoura.addEventListener('click', jogar);


// Função do Jogo
function jogar(){
    // Lista dos itens
    const opcoes = new Array(
        'Pedra',
        'Papel',
        'Tesoura'
    );

    // Lógica do jogo
    const computador = Math.floor(Math.random() * 3);

    if(jogador == 0) { // Pedra
        if (computador == 0){ // Pedra
            
            textoJogador.textContent = 'Deu Empate';
            textoJogador.style.color = 'brown';


            textoComputador.textContent = 'Deu Empate';
            textoComputador.style.color = 'brown';


        }
        else if(computador == 1){ // Papel
            
            textoJogador.textContent = 'Ganhou !!';
            textoJogador.style.color = 'green';
            
            
            textoComputador.textContent = 'Perdeu !!';
            textoComputador.style.color = 'red';

           
        }
        else { // Tesoura
            
            textoJogador.textContent = 'Perdeu !!';
            textoJogador.style.color = 'red';

            textoComputador.textContent = 'Ganhou !!';
            textoComputador.style.color = 'green';


        }
    }

    if(jogador1 == 1) { // Papel

        if (computador == 0){ // Pedra

            textoJogador.textContent = 'Venceu !!';
            textoJogador.style.color = 'green';


            textoComputador.textContent = 'Perdeu !!';
            textoComputador.style.color = 'red';
        }
        else if(computador == 1){ // Papel
            
            textoJogador.textContent = 'Deu Empate';
            textoJogador.style.color = 'brown';


            textoComputador.textContent = 'Deu Empate';
            textoComputador.style.color = 'brown';
        }
        else { // Tesoura
            
            textoJogador.textContent = 'Perdeu !!';
            textoJogador.style.color = 'red';


            textoComputador.textContent = 'Venceu !!';
            textoComputador.style.color = 'green';
        }
    }

    if(jogador2 == 2) { // Tesoura
        if (computador == 0){ // Pedra
            
            textoJogador.textContent = 'Perdeu !!';
            textoJogador.style.color = 'red';


            textoComputador.textContent = 'Venceu !!';
            textoComputador.style.color = 'green';
        }
        else if(computador == 1){ // Papel
            
            
            textoJogador.textContent = 'Ganhou !!';
            textoJogador.style.color = 'green';


            textoComputador.textContent = 'Perdeu !!';
            textoComputador.style.color = 'red';
        }
        else { // Tesoura
            
            
            textoJogador.textContent = 'Deu Empate';
            textoJogador.style.color = 'brown';


            textoComputador.textContent = 'Deu Empate';
            textoComputador.style.color = 'brown';
        }
    }

}