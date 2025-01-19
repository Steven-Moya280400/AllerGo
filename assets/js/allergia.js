const username = document.getElementById('username');
const allergie = document.getElementById('allergie');

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
    else if (diapositiva == "esplora") {
        personalizza.classList.add('nascondere');
        body.classList.remove('nero');
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
    else if (diapositiva == "esplora") {
        personalizza.classList.add('mostrare');
        body.classList.add('nero');
        setTimeout(function () {
            personalizza.classList.remove("nascondere");
            personalizza.classList.remove("mostrare");
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