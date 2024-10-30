const btnMostrarMais = document.querySelector('.btn-mostrar-projetos');
const projetos = document.querySelectorAll('.projeto');
let projetosAtuais = 4;

// Inicializa a visualização com os 4 primeiros projetos
function init() {
    projetos.forEach((projeto, index) => {
        if (index < projetosAtuais) {
            projeto.classList.add('ativo'); // Adiciona a classe 'ativo' para mostrar
            projeto.style.display = 'block';
        }
    });
    // Exibe o botão se houver mais projetos
    if (projetos.length > projetosAtuais) {
        btnMostrarMais.style.display = 'block'; // Mostra o botão
    }
}

// Mostra mais 4 projetos
function mostrarMaisProjetos() {
    let count = 0;
    projetos.forEach((projeto) => {
        if (!projeto.classList.contains('ativo') && count < 4) {
            projeto.classList.add('ativo'); // Adiciona a classe 'ativo' para mostrar
            projeto.style.display = 'block'; // Mostra o projeto
            count++;
        }
    });

    // Esconde o botão se não houver mais projetos ocultos
    if (document.querySelectorAll('.projeto:not(.ativo)').length === 0) {
        btnMostrarMais.style.display = 'none'; // Oculta o botão
    }
}

// Adiciona evento de clique ao botão
btnMostrarMais.addEventListener('click', mostrarMaisProjetos);

// Chama a função de inicialização ao carregar a página
init();

// Seleciona o logo GP
const logo = document.getElementById('logo');

// Adiciona evento de clique ao logo
logo.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
        top: 0, // A posição para onde queremos rolar
        behavior: 'smooth' // Rolar suavemente
    });
});