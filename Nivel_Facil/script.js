// Seleciona todos os elementos com a classe "key" e percorre cada um deles usando forEach.
document.querySelectorAll('.key').forEach(key => {  
   
  // Adiciona um evento de clique a cada tecla do piano.
  key.addEventListener('click', () => {  
     
     // Obtém o valor do atributo "data-note" da tecla clicada.
     const note = key.getAttribute('data-note');  
     
     // Cria um novo objeto de áudio carregando o arquivo correspondente ao nome da nota.
     const audio = new Audio(`sounds/${note}.mp3`);  
     
     // Reproduz o som da nota associada à tecla clicada.
     audio.play();  
  });  
});