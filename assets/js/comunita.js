const body = document.getElementById('body');

function mostrareArticolo(id) {
    let articolo = document.getElementById(id);
    articolo.classList.add("attivato");
    setTimeout(function () {
        body.classList.add('nero');
        articolo.classList.add("mostrare");
    }, 100);
}

function nascondereArticolo(id) {
    let articolo = document.getElementById(id);
    articolo.classList.add("nascondere");
    body.classList.remove('nero');
    setTimeout(function () {
        articolo.classList.remove("mostrare");
        articolo.classList.remove("attivato");
        articolo.classList.remove("nascondere");
    }, 500);
}