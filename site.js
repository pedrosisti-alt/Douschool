function numeroAleatorio() {
    const numeros = [];
    for (let i = 1; i <= 4; i++) numeros.push(i);
    for (let i = 5; i <= 7; i++) numeros.push(i);
    for (let i = 8; i <= 10; i++) numeros.push(i);
    const indice = Math.floor(Math.random() * numeros.length);
    return numeros[indice];
  }
  
  function animarNumero(idSpan) {
    const span = document.getElementById(idSpan);
  
    // animação rápida de números mudando
    let intervalo = setInterval(() => {
      span.textContent = Math.floor(Math.random() * 10 + 1) + "/10";
    }, 100);
  
    // para após 3 segundos e mostra o resultado final
    setTimeout(() => {
      clearInterval(intervalo);
      span.textContent = numeroAleatorio() + "/10";
    }, 3000);
  }
  
  // inicia a animação ao carregar a página
  window.onload = function() {
    animarNumero("diff-card-1");
    animarNumero("diff-card-2");
    animarNumero("diff-card-3");
  };
  