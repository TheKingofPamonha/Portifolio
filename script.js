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

linksDoMenu.forEach(function(link){
    link.addEventListener('click', function(evento){
        evento.preventDefault();
        const idDaSecao = link.getAttribute('href');
        const secao = document.querySelector(idDaSecao);
        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});