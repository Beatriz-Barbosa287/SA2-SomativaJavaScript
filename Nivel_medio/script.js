// Variável que define a luz atual, começa com a luz vermelha (índice 0)
let currentLight = 0; 

// Seleciona todos os elementos <span> dentro da div com a classe 'container' 
// que representam as luzes do semáforo.
const lights = document.querySelectorAll('.container span'); 

// Função responsável por mudar a luz ativa no semáforo
function changeLight() {
    // Desativa todas as luzes removendo as classes de luz ativa
    lights.forEach(light => light.classList.remove('vermelho-ativo', 'amarelo-ativo', 'verde-ativo'));

    // Ativa a luz correspondente com base no valor de 'currentLight'
    if (currentLight === 0) {
        // Ativa a luz vermelha
        lights[0].classList.add('vermelho-ativo');
    } else if (currentLight === 1) {
        // Ativa a luz amarela
        lights[1].classList.add('amarelo-ativo');
    } else {
        // Ativa a luz verde
        lights[2].classList.add('verde-ativo');
    }

    // Atualiza o índice de 'currentLight' para a próxima luz (0, 1 ou 2)
    // O operador % 3 garante que o ciclo de luzes se repita: 0 → 1 → 2 → 0 → 1 → 2...
    currentLight = (currentLight + 1) % 3;
}

// Chama a função 'changeLight' a cada 3 segundos (3000 milissegundos) 
// para alternar as luzes do semáforo continuamente.
setInterval(changeLight, 3000);
