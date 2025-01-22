const username = document.getElementById('username');
const allergie = document.getElementById('allergie');
const preferenzeAlimentari = document.getElementById('preferenzeAlimentari');
const logoUtente = document.getElementById('logoUtente');
const utenteIniziale = document.getElementById('utenteIniziale');

function inserisciNome() {
    const nome = document.getElementById('nome');

    if (nome.value != '') {
        logoUtente.style.display = 'none';
        utenteIniziale.innerText = nome.value[0].toUpperCase();
        utenteIniziale.classList.add('mostrare');
    }
    else {
        utenteIniziale.classList.remove('mostrare');
        logoUtente.style.display = 'block';
    }
}


function avantiDiapositiva(diapositiva) {
    if (diapositiva == "allergie") {
        username.classList.add('nascondere');
    }
    else if (diapositiva == "preferenzeAlimentari") {
        allergie.classList.add('nascondere');
    }
    else if (diapositiva == "riepilogo") {
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

function selezionaAllergia() {
    document.getElementById('allergiaSelezionata').classList.add('attivato')
}

function rimuovereAllergia() {
    document.getElementById('allergiaSelezionata').classList.remove('attivato')
}

function cercareAllergia() {
    document.getElementById('menuAllergia').classList.add('nascondere')
    document.getElementById('navMenuAllergia').classList.add('nascondere')
}

function ricercaRavvicinata() {
    document.getElementById('menuAllergia').classList.remove('nascondere')
    document.getElementById('navMenuAllergia').classList.remove('nascondere')
}

function selezionaPreferenzeAlimentari() {
    document.getElementById('preferenzeAlimentariSelezionata').classList.add('attivato')
}

function rimuoverePreferenzeAlimentari() {
    document.getElementById('preferenzeAlimentariSelezionata').classList.remove('attivato')
}