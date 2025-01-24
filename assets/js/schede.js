const condividere = document.getElementById('condividere');

function mostrareCondividere() {
    condividere.classList.add("mostrare");
}

function nascondereCondividere() {
    condividere.classList.add("nascondere");
    setTimeout(function () {
        condividere.classList.remove("mostrare");
        condividere.classList.remove("nascondere");

    }, 1000);
}