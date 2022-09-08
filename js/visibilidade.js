let respostaPrimarioEl = document.querySelector('#backbonePrimario');
let respostaSecundarioEl = document.querySelector('#backboneSecundario');
let tipoCaboOpticoEl = document.querySelector('#tipoCaboOptico');
let quantidadeFibrasEl = document.querySelector('#quantidadeFibras');
let linhasBackbone = document.querySelectorAll('.tabelaBackbone');

function ativaVisibilidade() {
    respostaPrimarioEl.removeAttribute('disabled');
    respostaSecundarioEl.removeAttribute('disabled');
    tipoCaboOpticoEl.removeAttribute('disabled');
    quantidadeFibrasEl.removeAttribute('disabled');  
    linhasBackbone.forEach(element => {
        element.style.display = '';
        
    });  
}

function desativaVisibilidade() {
    respostaPrimarioEl.setAttribute('disabled', '');
    respostaSecundarioEl.setAttribute('disabled', '');
    tipoCaboOpticoEl.setAttribute('disabled', '');
    quantidadeFibrasEl.setAttribute('disabled', '');
    linhasBackbone.forEach(element => {
        element.style.display = 'none';
    });
}

