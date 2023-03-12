/**
 * OBJETIBO - quando clicarmos no botão temos que mostrar a imagem fe fundo correspondente
 */

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const image = document.querySelectorAll('.image');

//- passo 2 - dar um jeito de indetificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //- passo 4 - marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        //- passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        
        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        image[indice].classList.add('ativa')
        
    })
})