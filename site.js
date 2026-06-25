// script.js

// Exemplo simples de interação
document.querySelectorAll('.carta').forEach(button => {
    button.addEventListener('click', () => {
      alert(`Você escolheu a matéria: ${button.textContent}`);
      // Aqui futuramente você pode redirecionar para outra parte do app
    });
  });
  
  // Atualizar pontos como exemplo
  let pontos = 0;
  function adicionarPontos(valor) {
    pontos += valor;
    document.getElementById('pontos').textContent = pontos;
  }
  
  // Simulação: adicionar pontos ao clicar em desafio
  document.querySelectorAll('.desafios .box').forEach(box => {
    box.addEventListener('click', () => {
      adicionarPontos(5);
      alert(`Você completou o desafio ${box.textContent}!`);
    });
  });
  