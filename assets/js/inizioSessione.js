const body = document.getElementById('body');
const benvenuto = document.getElementById('benvenuto');
const accedi = document.getElementById('accedi');
const registrati = document.getElementById('registrati');
const popUpGoogle = document.getElementById('popUpGoogle');
const scegliAccountGoogle = document.getElementById('scegliAccountGoogle');
const registratiEmail = document.getElementById('registratiEmail');
const accediAccountGoogle = document.getElementById('accediAccountGoogle');
const ritornoPulsante = document.getElementById('ritorno');
const passwordDimenticata = document.getElementById('passwordDimenticata');

function ritorno() {
    if (registratiEmail.classList.contains('attivato')) {
        registratiEmail.classList.remove('attivato')
        registrati.classList.add('attivato');
    }
    else if (passwordDimenticata.classList.contains('attivato')) {
        passwordDimenticata.classList.remove('attivato')
        body.classList.add('nero');
        accedi.classList.add('attivato');
    }
    else {
        body.classList.remove('nero');
        accedi.classList.remove('attivato');
        registrati.classList.remove('attivato');
        benvenuto.classList.add('attivato');
        ritornoPulsante.classList.add('nascondere');
    }
}

function mostrareAccedi() {
    body.classList.add('nero');
    benvenuto.classList.remove('attivato');
    accedi.classList.add('attivato');
    registrati.classList.remove('attivato');
    ritornoPulsante.classList.remove('nascondere');
}

function mostrareRegistrati() {
    body.classList.add('nero');
    benvenuto.classList.remove('attivato');
    accedi.classList.remove('attivato');
    registrati.classList.add('attivato');
    ritornoPulsante.classList.remove('nascondere');
}

function mostrareRegistratiEmail() {
    registrati.classList.remove('attivato');
    registratiEmail.classList.add('attivato');
}

function mostrarePasswordDimenticata() {
    body.classList.remove('nero');
    accedi.classList.remove('attivato');
    passwordDimenticata.classList.add('attivato');
}

function mostrarePopUpGoogle() {
    popUpGoogle.classList.add("attivato");
    setTimeout(function () {
        popUpGoogle.classList.add("mostrare");
    }, 100);
}

function nasconderePopUpGoogle() {
    popUpGoogle.classList.add("nascondere");
    setTimeout(function () {
        popUpGoogle.classList.remove("mostrare");
        popUpGoogle.classList.remove("attivato");
        popUpGoogle.classList.remove("nascondere");

    }, 500);
}

function mostrareScegliAccountGoogle() {
    scegliAccountGoogle.classList.add("mostrare");
    popUpGoogle.classList.remove("mostrare");
    popUpGoogle.classList.remove("attivato");
}

function nasconderecegliAccountGoogle() {
    scegliAccountGoogle.classList.add("nascondere");
    setTimeout(function () {
        scegliAccountGoogle.classList.remove("mostrare");
        scegliAccountGoogle.classList.remove("nascondere");
    }, 500);
}

function mostrareAccediAccountGoogle() {
    accediAccountGoogle.classList.add("mostrare");
}

function nascondereAccediAccountGoogle() {
    accediAccountGoogle.classList.add("nascondere");
    setTimeout(function () {
        accediAccountGoogle.classList.remove("mostrare");
        accediAccountGoogle.classList.remove("nascondere");
    }, 500);
}

function annulaAccediAccountGoogle() {
    scegliAccountGoogle.classList.remove("mostrare");
    scegliAccountGoogle.classList.remove("nascondere");
    accediAccountGoogle.classList.add("annula");
    setTimeout(function () {
        accediAccountGoogle.classList.remove("mostrare");
        accediAccountGoogle.classList.remove("annula");
    }, 500);
}