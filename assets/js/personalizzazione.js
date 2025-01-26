const ciglia = document.getElementById('ciglia');
const ciglioAttivatoTesto = document.getElementById('ciglioAttivatoTesto');
const ciglioTesto = document.getElementById('ciglioTesto');
const schedaContenuto = document.getElementById('schedaContenuto');
const preferetiContenuto = document.getElementById('preferetiContenuto');

function cambiaCiglio(ciglio = '') {
    if (ciglia.classList.contains('prefereti')) {
        if (ciglio != 'attivato') {
            ciglia.classList.add('scheda');

            setTimeout(function () {
                ciglioAttivatoTesto.innerText = "Scheda";
                ciglioTesto.innerText = "Prefereti";
                preferetiContenuto.classList.add('nascondere')
                
                setTimeout(function () {
                    schedaContenuto.classList.add('attivato')
                    ciglia.classList.remove('prefereti');
                    ciglia.classList.remove('scheda');
                    preferetiContenuto.classList.remove('attivato');
                    preferetiContenuto.classList.remove('mostrare');
                    preferetiContenuto.classList.remove('nascondere');
                    schedaContenuto.classList.add('mostrare')
                }, 400);
            }, 100);
        }
    }
    else {
        if (ciglio != 'attivato') {
            ciglia.classList.add('prefereti');
            setTimeout(function () {
                ciglioAttivatoTesto.innerText = "Prefereti";
                ciglioTesto.innerText = "Scheda";
                schedaContenuto.classList.add('nascondere')
                preferetiContenuto.classList.add('attivato')

                setTimeout(function () {
                    schedaContenuto.classList.remove('attivato');
                    schedaContenuto.classList.remove('mostrare');
                    schedaContenuto.classList.remove('nascondere');
                    preferetiContenuto.classList.add('mostrare')
                }, 400);
            }, 100);
        }
    }
}