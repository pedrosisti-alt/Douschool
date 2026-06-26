// Dados falsos (mock) para testar a interface do perfil
const dadosDoAluno = {
    nome: "Luiz Souza",
    sequencia: "🔥 7 dias",
    pontos: "⚡ 473 XP"
};

// Executa o código assim que a página terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    // Altera o Nick Name dinamicamente
    const nomeUsuario = document.querySelector(".profile-title h2");
    if (nomeUsuario) {
        nomeUsuario.textContent = dadosDoAluno.nome;
    }

    // Injeta os pontos e a sequência fictícia nas células correspondentes
    const celulaSequencia = document.getElementById("stat-sequencia");
    const celulaPontos = document.getElementById("stat-pontos");

    if (celulaSequencia) {
        celulaSequencia.innerHTML = `seq. <br><strong>${dadosDoAluno.sequencia}</strong>`;
    }

    if (celulaPontos) {
        celulaPontos.innerHTML = `Pts. <br><strong>${dadosDoAluno.pontos}</strong>`;
    }
});

// Banco de dados falso para simular o sistema rodando
const dadosDouschool = {
    aluno: {
        nome: "Luiz Souza",
        sequencia: "🔥 7 dias",
        pontos: "⚡ 473 XP"
    },
    cartoesDificuldade: {
        card1: "1/10",
        card2: "5/10",
        card3: "10/10"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DA TELA DE PERFIL ---
    const nomeUsuario = document.querySelector(".profile-title h2");
    if (nomeUsuario) {
        nomeUsuario.textContent = dadosDouschool.aluno.nome;
    }

    const celulaSequencia = document.getElementById("stat-sequencia");
    const celulaPontos = document.getElementById("stat-pontos");

    if (celulaSequencia) {
        celulaSequencia.innerHTML = `seq. <br><strong>${dadosDouschool.aluno.sequencia}</strong>`;
    }
    if (celulaPontos) {
        celulaPontos.innerHTML = `Pts. <br><strong>${dadosDouschool.aluno.pontos}</strong>`;
    }

    // --- LÓGICA DA TELA DE CARTAS (INDEX) ---
    const diff1 = document.getElementById("diff-card-1");
    const diff2 = document.getElementById("diff-card-2");
    const diff3 = document.getElementById("diff-card-3");

    if (diff1) diff1.textContent = dadosDouschool.cartoesDificuldade.card1;
    if (diff2) diff2.textContent = dadosDouschool.cartoesDificuldade.card2;
    if (diff3) diff3.textContent = dadosDouschool.cartoesDificuldade.card3;

    // Adiciona clique interativo nos cartões aleatórios
    const cartoes = document.querySelectorAll(".subject-card");
    cartoes.forEach((cartao, index) => {
        cartao.addEventListener("click", () => {
            alert(`Você escolheu a matéria do Cartão ${index + 1}! Carregando lição...`);
        });
    });
});