function premiereCreation() {
    var premiereDescription = document.getElementById("premiere-crea");
    if (premiereDescription.style.display === "none") {
        premiereDescription.style.display = "block";
    } else {
        premiereDescription.style.display = "none";
    }
}

function deuxiemeCreation() {
    var deuxiemeDescription = document.getElementById("deuxieme-crea");
    if (deuxiemeDescription.style.display === "none") {
        deuxiemeDescription.style.display = "block";
    } else {
        deuxiemeDescription.style.display = "none";
    }
}

function troisiemeCreation() {
    var troisiemeDescription = document.getElementById("troisieme-crea");
    if (troisiemeDescription.style.display === "none") {
        troisiemeDescription.style.display = "block";
    } else {
        troisiemeDescription.style.display = "none";
    }
}

function formRempli() {

    let objet = document.getElementById("objet").value;
    let message = document.getElementById("message").value;

    if (!objet || !message) {
        alert("Veuillez remplir tous les champs.");
        return
    } else {
        window.open("mailto:petit.alicia.22@gmail.com"
        +"?subject="+encodeURIComponent(objet)
        +"&body=" + encodeURIComponent(message));
    }
}

function pasActualisation(event) {
    event.preventDefault();
}

function reinitialiserForm() {
    document.getElementById("formulaire-contact").reset();
}
