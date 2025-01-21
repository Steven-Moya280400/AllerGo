const username = document.getElementById('username');
const allergie = document.getElementById('allergie');
const preferenzeAlimentari = document.getElementById('preferenzeAlimentari');

function inserisciNome() {
    const nome = document.getElementById('nome');

    if (nome.value.toLowerCase().startsWith('c')) {
        document.getElementById('logoUtente').src = 'assets/img/logoC.png';
    }
    else {
        document.getElementById('logoUtente').src = 'assets/img/logo.png';
    }
}


function avantiDiapositiva(diapositiva) {
    if (diapositiva == "allergie") {
        username.classList.add('nascondere');
    }
    else if (diapositiva == "preferenzeAlimentari") {
        allergie.classList.add('nascondere');
    }
    else if(diapositiva == "riepilogo"){
        preferenzeAlimentari.classList.add('nascondere');
    }

}

function indietroDiapositiva(diapositiva) {
    if (diapositiva == "allergie") {
        username.classList.add('mostrare');
        setTimeout(function () {
            username.classList.remove("nascondere");
            username.classList.remove("mostrare");
        }, 1000);
    }
    else if (diapositiva == "preferenzeAlimentari") {
        allergie.classList.add('mostrare');
        setTimeout(function () {
            allergie.classList.remove("nascondere");
            allergie.classList.remove("mostrare");
        }, 1000);
    }
    else if (diapositiva == "riepilogo") {
        preferenzeAlimentari.classList.add('mostrare');
        setTimeout(function () {
            preferenzeAlimentari.classList.remove("nascondere");
            preferenzeAlimentari.classList.remove("mostrare");
        }, 1000);
    }
}

function selezionaAllergia(){
    document.getElementById('allergiaSelezionata').classList.add('attivato')
}

function rimuovereAllergia(){
    document.getElementById('allergiaSelezionata').classList.remove('attivato')
}

function cercareAllergia(){
    document.getElementById('menuAllergia').classList.add('nascondere')
    document.getElementById('navMenuAllergia').classList.add('nascondere')
}

function ricercaRavvicinata(){
    document.getElementById('menuAllergia').classList.remove('nascondere')
    document.getElementById('navMenuAllergia').classList.remove('nascondere')
}

function selezionaPreferenzeAlimentari(){
    document.getElementById('preferenzeAlimentariSelezionata').classList.add('attivato')
}

function rimuoverePreferenzeAlimentari(){
    document.getElementById('preferenzeAlimentariSelezionata').classList.remove('attivato')
}