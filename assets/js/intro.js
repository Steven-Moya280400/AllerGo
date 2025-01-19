const scannerizza = document.getElementById('scannerizza');
const personalizza = document.getElementById('personalizza');
const esplora = document.getElementById('esplora');

function avantiDiapositiva(diapositiva) {
    if (diapositiva == "personalizza") {
        scannerizza.classList.add('nascondere');
    }
    else if (diapositiva == "esplora") {
        personalizza.classList.add('nascondere');
    }

}

function indietroDiapositiva(diapositiva) {
    if (diapositiva == "personalizza") {
        scannerizza.classList.add('mostrare');
        setTimeout(function () {
            scannerizza.classList.remove("nascondere");
            scannerizza.classList.remove("mostrare");
        }, 1000);
    }
    else if (diapositiva == "esplora") {
        personalizza.classList.add('mostrare');
        setTimeout(function () {
            personalizza.classList.remove("nascondere");
            personalizza.classList.remove("mostrare");
        }, 1000);
    }
}