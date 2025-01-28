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

function selezionaAllergia(nome, icon) {
    const allergia = document.getElementById('allergia_' + nome.replaceAll(' ', ''));

    if (allergia == null || allergia == undefined) {
        const allergiaSelezionata = document.getElementById('allergiaSelezionata');

        const allergiaContenuto = document.createElement('div');
        allergiaContenuto.className = 'allergiaContenuto';
        allergiaContenuto.id = 'allergia_' + nome.replaceAll(' ', '');

        const allergiaPulsannte = document.createElement('button');
        allergiaPulsannte.className = 'allergiaPulsannte attivato';

        const imgArachidi = document.createElement('img');
        imgArachidi.src = icon;
        allergiaPulsannte.appendChild(imgArachidi);

        const nomeAllergia = document.createElement('p');
        nomeAllergia.className = 'nomeAllergia';
        nomeAllergia.textContent = nome;

        const imgRimuovere = document.createElement('img');
        imgRimuovere.className = 'rimuovereAllergia';
        imgRimuovere.src = 'assets/svg/x.svg';
        imgRimuovere.setAttribute('onclick', "rimuovereAllergia('allergia_" + nome.replaceAll(' ', '') + "');");

        allergiaContenuto.appendChild(allergiaPulsannte);
        allergiaContenuto.appendChild(nomeAllergia);
        allergiaContenuto.appendChild(imgRimuovere);
        allergiaSelezionata.appendChild(allergiaContenuto);
        allergiaSelezionata.classList.add('attivato')
    }
}

function rimuovereAllergia(id) {
    document.getElementById(id).outerHTML = "";
    const allergiaSelezionata = document.getElementById('allergiaSelezionata');
    if (!allergiaSelezionata || allergiaSelezionata.innerHTML.trim() === '') {
        allergiaSelezionata.classList.remove('attivato')
    }
}

function cercareAllergia() {
    document.getElementById('menuAllergia').classList.add('nascondere')
    document.getElementById('navMenuAllergia').classList.add('nascondere')
}

function ricercaRavvicinata() {
    document.getElementById('menuAllergia').classList.remove('nascondere')
    document.getElementById('navMenuAllergia').classList.remove('nascondere')
}

function selezionaPreferenzeAlimentari(nome, icon) {
    const preferenze = document.getElementById('allergia_' + nome.replaceAll(' ', ''));

    if (preferenze == null || preferenze == undefined) {
        const preferenzeAlimentariSelezionata = document.getElementById('preferenzeAlimentariSelezionata');

        const allergiaContenuto = document.createElement('div');
        allergiaContenuto.className = 'allergiaContenuto';
        allergiaContenuto.id = 'allergia_' + nome.replaceAll(' ', '');

        const allergiaPulsannte = document.createElement('button');
        allergiaPulsannte.className = 'allergiaPulsannte attivato';

        const imgArachidi = document.createElement('img');
        imgArachidi.src = icon;
        allergiaPulsannte.appendChild(imgArachidi);

        const nomeAllergia = document.createElement('p');
        nomeAllergia.className = 'nomeAllergia';
        nomeAllergia.textContent = nome;

        const imgRimuovere = document.createElement('img');
        imgRimuovere.className = 'rimuovereAllergia';
        imgRimuovere.src = 'assets/svg/x.svg';
        imgRimuovere.setAttribute('onclick', "rimuoverePreferenzeAlimentari('allergia_" + nome.replaceAll(' ', '') + "');");

        allergiaContenuto.appendChild(allergiaPulsannte);
        allergiaContenuto.appendChild(nomeAllergia);
        allergiaContenuto.appendChild(imgRimuovere);
        preferenzeAlimentariSelezionata.appendChild(allergiaContenuto);
        preferenzeAlimentariSelezionata.classList.add('attivato')
    }
}

function rimuoverePreferenzeAlimentari(id) {
    document.getElementById(id).outerHTML = "";
    const preferenzeAlimentariSelezionata = document.getElementById('preferenzeAlimentariSelezionata');
    if (!preferenzeAlimentariSelezionata || preferenzeAlimentariSelezionata.innerHTML.trim() === '') {
        preferenzeAlimentariSelezionata.classList.remove('attivato')
    }
}