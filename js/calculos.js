

let secaoPlanilhaEl = document.querySelector('#planilha');

function gerarPlanilha(event) {
    event.preventDefault();
    secaoPlanilhaEl.style.display = 'block';

    let numPavimentosEl = document.querySelector('#numeroPavimentos');
    let numPavimentos = numPavimentosEl.value;

    let numPontosConexaoEl = document.querySelector('#numeroPontosConexao');
    let numPontosConexao = numPontosConexaoEl.value;

    let medidaLanceEl = document.querySelector('#medidaLance');
    let medidaLance = medidaLanceEl.value;

    let categoriaCaboEl = document.querySelector('#categoriaCabo');
    let categoriaCabo = categoriaCaboEl.value;

    let resExistenciaBackbone = document.getElementsByName('existenciaBackbone'); // todos os radio button

    let backbone = document.getElementsByName('backbone'); // todos os checkbox button 

    let tipoCaboOpticoEl = document.querySelector('#tipoCaboOptico');
    let tipoCaboOptico = tipoCaboOpticoEl.value;

    let quantidadeFibrasEl = document.querySelector('#quantidadeFibras');
    let quantidadeFibras = quantidadeFibrasEl.value;

    // Tomada RJ45 femêa
    let descricaoTomadaRJ45 = document.querySelector('#descricaoTomadaRJ45');
    descricaoTomadaRJ45.innerHTML = 'Tomada RJ45 femêa ' + categoriaCabo;

    let celulaTomada = document.querySelector('#tomadaRJ45');
    let numTomadas = numPontosConexao * 2 * numPavimentos;
    celulaTomada.innerHTML = numTomadas;

    // Cabo UTP par trançado
    let descricaoCaboUTP = document.querySelector('#descricaoCaboUTP');
    descricaoCaboUTP.innerHTML = 'Cabo UTP par trançado ' + categoriaCabo + ' (MH)';

    let celulaCaboUTP = document.querySelector('#caboUTP');
    celulaCaboUTP.innerHTML = Math.ceil((medidaLance * numTomadas) / 305);

    // Espelhos
    let celulaEspelhos = document.querySelector('#espelhos');
    let numEspelhos = numPontosConexao * numPavimentos;
    celulaEspelhos.innerHTML = numEspelhos;

    // Patch Cord
    let descricaoPatchCord = document.querySelector('#descricaoPatchCord');
    descricaoPatchCord.innerHTML = 'Patch Cord ' + categoriaCabo + ', azul, 3m (MH)';

    let celulaPatchCord = document.querySelector('#patchCord');
    celulaPatchCord.innerHTML = numTomadas;

    // Patch Panel
    let descricaoPatchPanel = document.querySelector('#descricaoPatchPanel');
    descricaoPatchPanel.innerHTML = 'Patch Panel ' + categoriaCabo + ', 24 portas (PPMH - Patch de Malha Horizontal)';

    let celulaPatchPanel = document.querySelector('#patchPanel');
    let numPatchPanel = Math.ceil(numTomadas / 24);
    celulaPatchPanel.innerHTML = numPatchPanel;

    // Organizador de cabo frontal
    let celulaOrganizador = document.querySelector('#organizador');
    let numOrganizadores = numPatchPanel * 2
    celulaOrganizador.innerHTML = numOrganizadores;

    // Bandeja fixa
    let celulaBandeja = document.querySelector('#bandeja');
    celulaBandeja.innerHTML = numPatchPanel / 2;

    // Patch Cable
    let descricaoPatchCable = document.querySelector('#descricaoPatchCable');
    descricaoPatchCable.innerHTML = 'Patch Cable' + categoriaCabo + ', azul - 2,5m';

    let celulaPatchCable = document.querySelector('#patchCable');
    celulaPatchCable.innerHTML = numTomadas;

    // Rack
    let medidaRack = numPatchPanel + numOrganizadores + 4 + numPatchPanel + 2 + 2;
    // numPatchPanel + numOrganizadores + 1 bandeja (4U) + numSwitches + Filtro de linha (2U) + Exaustor (2U)

    let tamanhoRack = medidaRack * 1.5;

    let descricaoRack = document.querySelector('#descricaoRack');
    let celulaRack = document.querySelector('#rack');
    let rack;
    
    if(tamanhoRack >= 36){
        descricaoRack.innerHTML = 'Rack fechado, largura de 19" e tamanho ' + 36 + 'U';
        celulaRack.innerHTML = Math.ceil(tamanhoRack / 36);
        rack = 36;
    }else if(tamanhoRack < 36 && tamanhoRack > 24){
        descricaoRack.innerHTML = 'Rack fechado, largura de 19" e tamanho ' + 36 + 'U';
        celulaRack.innerHTML = Math.ceil(tamanhoRack / 36);
        rack = 36;
    }else if(tamanhoRack <= 24 && tamanhoRack > 16){
        descricaoRack.innerHTML = 'Rack fechado, largura de 19" e tamanho ' + 24 + 'U';
        celulaRack.innerHTML = Math.ceil(tamanhoRack / 24);
        rack = 24;
    }else if(tamanhoRack <= 16){
        descricaoRack.innerHTML = 'Rack fechado, largura de 19" e tamanho ' + 16 + 'U';
        celulaRack.innerHTML = 1;
        rack = 16;
    }  

    //Exaustor 
    let celulaExaustor = document.querySelector('#exaustor');
    celulaExaustor.innerHTML = 1;

    // Etiquetas de identficação da porta do Patch Panel
    let etiquetaPorta = document.querySelector('#etiquetaPorta');
    etiquetaPorta.innerHTML = numPatchPanel * 24;

    // Etiquetas de identficação Patch Cable
    let etiquetaPatchCable = document.querySelector('#etiquetaPatchCable');
    etiquetaPatchCable.innerHTML = numTomadas;

    // Etiquetas de identficação do Patch Panel
    let etiquetaPatchPanel = document.querySelector('#etiquetaPatchPanel');
    etiquetaPatchPanel.innerHTML = numPatchPanel;

    // Etiquetas de identificação Tomadas e Espelhos
    let etiquetaTomadasEspellhos = document.querySelector('#etiquetaTomadasEspellhos');
    etiquetaTomadasEspellhos.innerHTML = numTomadas + numEspelhos;

    // Etiquetas de identificação Cabos UTP - MH
    let etiquetaCabosUTP = document.querySelector('#etiquetaCabosUTP');
    etiquetaCabosUTP.innerHTML = numTomadas * 2;

    // Etiqueta para os cordões ópticos e pigtail´s (TO) +++++++++++++++
    let etiquetaCordoes = document.querySelector('#etiquetaCordoes');
    etiquetaCordoes.innerHTML = numTomadas;

    // Etiqueta para Portas do DIO +++++++++++++++++
    let etiquetaPortasDio = document.querySelector('#etiquetaPortasDio');
    etiquetaPortasDio.innerHTML = numTomadas;

    // Abraçadeiras plásticas, pacote 100 unidades
    let abracadeirasPlasticas = document.querySelector('#abracadeirasPlasticas');
    abracadeirasPlasticas.innerHTML = Math.ceil(numTomadas / 100);
    
    // Abraçadeiras de velcro, rolo 3 m
    let abracadeirasVelcro = document.querySelector('#abracadeirasVelcro');
    abracadeirasVelcro.innerHTML = 1;

    // Régua com 6 AJUSTAR tomadas - filtro de linha
    let reguaTomadas = document.querySelector('#reguaTomadas');
    reguaTomadas.innerHTML = numPavimentos;

    /*
    // Régua de fechamento
    let reguaFechamento = document.querySelector('#reguaFechamento');
    reguaFechamento.innerHTML = 67;
    */

    // Porca Gaiola - pacote com 10 unidades
    let portaGaiola = document.querySelector('#portaGaiola');
    portaGaiola.innerHTML = Math.ceil((rack * 4) / 10);

    // Backbone Óptico

    // Cabo de Fibra Óptica
    let descricaoCaboFibra = document.querySelector('#descricaoCaboFibra');
    descricaoCaboFibra.innerHTML = 'Cabo de Fibra Óptica' + tipoCaboOptico + ' 50 x 125µm - com ' + quantidadeFibras+ ' fibras';

    let caboFibra = document.querySelector('#caboFibra');

    let andarFibra = 5;
    let totalFibra = 0;

    for(let i = 1; i <= numPavimentos; i++){
        totalFibra += ((andarFibra * i) + andarFibra);
    }

    caboFibra.innerHTML = totalFibra;

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica
    
    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica

    // Cabo de Fibra Óptica
}