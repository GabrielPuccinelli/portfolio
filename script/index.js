const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
});

function mostrarMaisProjetos() {
    let count = 0;
    projetosInativos.forEach((projeto) => {
        if (count < 4) { // Exibe 4 projetos adicionais
            projeto.classList.add('ativo');
            projeto.querySelector('img').src = projeto.querySelector('img').src.replace('foto-loading.jpeg', 'projeto' + (count + 5) + '.png');
            count++;
        }
    });

    // Esconde o botão "Mostrar Mais" se não houver mais projetos ocultos
    if (document.querySelectorAll('.projeto:not(.ativo)').length === 0) {
        botaoMostrarProjetos.style.display = 'none';
    }
}
