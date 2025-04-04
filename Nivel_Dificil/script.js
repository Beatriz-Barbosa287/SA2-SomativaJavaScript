// Selecionando elementos do DOM
const tabuleiro = document.getElementById('tabuleiro'); // Seleciona o tabuleiro do jogo
const celulas = document.querySelectorAll('[data-celula]'); // Seleciona todas as células do tabuleiro
const status = document.getElementById('status'); // Seleciona o elemento que exibe o status do jogo
const botaoReiniciar = document.getElementById('reiniciar'); // Seleciona o botão de reiniciar

// Variáveis de controle do jogo
let jogadorAtual = 'X'; // Define o jogador inicial como 'X'
let jogoAtivo = true; // Controla se o jogo está ativo ou não

// Combinações vencedoras possíveis
const combinacoesVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
];

// Função para lidar com o clique em uma célula
function lidarComCliqueCelula(e) {
    const celula = e.target; // Obtém a célula clicada
   

    // Verifica se a célula já está preenchida ou se o jogo acabou
    if (celula.textContent !== '' || !jogoAtivo) return;

    // Preenche a célula com o símbolo do jogador atual
    celula.textContent = jogadorAtual;

    // Definir ações em caso de vitória
    if (verificarVitoria()) {
        const comboVencedor = obterComboVencedor(); // Obtém a combinação vencedora
        destacarCelulasVencedoras(comboVencedor); // Destaca as células vencedoras
        status.textContent = `Jogador ${jogadorAtual} venceu!`; // Atualiza o status para mostrar o vencedor
        jogoAtivo = false; // Finaliza o jogo
    } else if (verificarEmpate()) {
        // Verifica se houve empate
        status.textContent = 'Empate!'; // Atualiza o status para mostrar que houve empate
        jogoAtivo = false; // Finaliza o jogo
    } else {
        // Troca o jogador atual
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Alterna entre 'X' e 'O'
        status.textContent = `Vez do jogador ${jogadorAtual}`; // Atualiza o status para mostrar a vez do próximo jogador
    }
}

// Função para verificar se houve vitória
function verificarVitoria() {
    // Verifica se alguma combinação vencedora foi atingida
    return combinacoesVencedoras.some(combinacao => {
        return combinacao.every(indice => {
            return celulas[indice].textContent === jogadorAtual; // Verifica se todas as células da combinação pertencem ao jogador atual
        });
    });
}

// Função para obter a combinação vencedora
function obterComboVencedor() {
    // Retorna a combinação vencedora, se existir
    return combinacoesVencedoras.find(combinacao => {
        return combinacao.every(indice => {
            return celulas[indice].textContent === jogadorAtual; // Verifica se todas as células da combinação pertencem ao jogador atual
        });
    });
}

// Função para destacar as células vencedoras
function destacarCelulasVencedoras(combo) {
    combo.forEach(indice => {
        celulas[indice].classList.add('vencedor'); // Adiciona a classe 'vencedor' às células da combinação vencedora
    });
}

// Função para verificar se houve empate
function verificarEmpate() {
    // Verifica se todas as células estão preenchidas sem um vencedor
    return Array.from(celulas).every(celula => celula.textContent !== '');
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    jogadorAtual = 'X'; // Reseta o jogador inicial para 'X'
    jogoAtivo = true; // Reativa o jogo
    celulas.forEach(celula => {
        celula.textContent = ''; // Limpa o conteúdo das células
        celula.classList.remove('vencedor'); // Remove a classe 'vencedor' das células
    });
    status.textContent = `Vez do jogador ${jogadorAtual}`; // Reseta o status para mostrar a vez do jogador inicial
}

// Adicionando event listeners
celulas.forEach(celula => celula.addEventListener('click', lidarComCliqueCelula)); // Adiciona o evento de clique a cada célula
botaoReiniciar.addEventListener('click', reiniciarJogo); // Adiciona o evento de clique ao botão de reiniciar

// Inicialização do status do jogo
status.textContent = `Vez do jogador ${jogadorAtual}`; // Exibe a vez do jogador inicial