const personalizza = document.getElementById('personalizza');
const esplora = document.getElementById('esplora');

function avantiDiapositiva(diapositiva){
    if(diapositiva=="personalizza"){
        personalizza.classList.add('mostrare');
    }
    else if(diapositiva=="esplora"){
        esplora.classList.add('mostrare');
    }
    
}

function indietroDiapositiva(diapositiva){
    if(diapositiva=="personalizza"){
        personalizza.classList.add('nascondere');
        setTimeout(function () {
            personalizza.classList.remove("mostrare");
            personalizza.classList.remove("nascondere");
        }, 1000);
    }
    else if(diapositiva=="esplora"){
        esplora.classList.add('nascondere');
        setTimeout(function () {
            esplora.classList.remove("mostrare");
            esplora.classList.remove("nascondere");
        }, 1000);
    }
}