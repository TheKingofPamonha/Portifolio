const slider = document.getElementById('slider-projetos');
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

function getTamanhoPulo() {
    const card = slider.querySelector('.projeto-item');
    return card.offsetWidth + 32;
}

// Seta direita (Avançar)
btnAvancar.addEventListener('click', () => {
    const chegouNoFinal = (slider.scrollLeft + slider.clientWidth) >= (slider.scrollWidth - 10);

    if (chegouNoFinal) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: getTamanhoPulo(), behavior: 'smooth' });
    }
});

// Seta esquerda (Voltar)
btnVoltar.addEventListener('click', () => {
    const chegouNoComeco = slider.scrollLeft <= 10;

    if (chegouNoComeco) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: -getTamanhoPulo(), behavior: 'smooth' });
    }
});


const linksDoMenu = document.querySelectorAll('.cabecalho-link');

linksDoMenu.forEach((link) => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const idDaSecao = link.getAttribute('href');
        const secao = document.querySelector(idDaSecao);

        if (secao) {
            secao.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    })
})

const formContato = document.getElementById('form-contato');
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputMensagem = document.getElementById('input-mensagem');

if (formContato) {
    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha o formulário antes de enviar!');
        } else {
            alert('Obrigado! Sua mensagem foi enviada com sucesso.');
            formContato.reset();
        }
    })
}