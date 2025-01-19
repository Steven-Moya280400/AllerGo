const scannerizza = document.getElementById('scannerizza');
const personalizza = document.getElementById('personalizza');
const esplora = document.getElementById('esplora');
const body = document.getElementById('body');

function avantiDiapositiva(diapositiva) {
    if (diapositiva == "personalizza") {
        scannerizza.classList.add('nascondere');
        body.classList.add('nero');
    }
    else if (diapositiva == "esplora") {
        personalizza.classList.add('nascondere');
        body.classList.remove('nero');
    }

}

function indietroDiapositiva(diapositiva) {
    if (diapositiva == "personalizza") {
        scannerizza.classList.add('mostrare');
        body.classList.remove('nero');
        setTimeout(function () {
            scannerizza.classList.remove("nascondere");
            scannerizza.classList.remove("mostrare");
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