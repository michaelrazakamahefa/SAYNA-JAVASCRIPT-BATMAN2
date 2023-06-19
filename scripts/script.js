//changement couleur jaune logo fixed et home
function changeImagelogoHome() {
  document.getElementById("idLogoHome").src = "Assets/Logos/logohome_jaune.png";
}

function changeImageBatHaut() {
  document.getElementById("batHaut").src =
    "Assets/Logos/logo_bat_flèche_jaune.png";
}

function changeImageBatBas() {
  document.getElementById("batBas").src =
    "Assets/Logos/logo_bat_flèche_2_jaune.png";
}

function changeImageFb() {
  document.getElementById("fb").src = "Assets/Logos/icon_facebook_jaune.png";
}

function changeImageIg() {
  document.getElementById("ig").src = "Assets/Logos/icon_ig_jaune.png";
}

function changeImageTw() {
  document.getElementById("tw").src = "Assets/Logos/icon_tw_jaune.png";
}
//changement couleur jaune logo dans footer
function changeSaynaFooter() {
  document.getElementById("SaynaFooter").src =
    "Assets/Logos/logo_sayna_white_jaune.png";
}

function changeXfooter() {
  document.getElementById("xFooter").src = "Assets/Logos/icon_x_jaune.png";
}

function changeDcFooter() {
  document.getElementById("dcFotter").src = "Assets/Logos/icon_DC_jaune.png";
}

function changeFbFooter() {
  document.getElementById("fbFooter").src =
    "Assets/Logos/icon_facebook_jaune.png";
}

function changeIgFooter() {
  document.getElementById("igFooter").src = "Assets/Logos/icon_ig_jaune.png";
}

function changeTwFooter() {
  document.getElementById("twFooter").src = "Assets/Logos/icon_tw_jaune.png";
}

// reset couleur apres passage de la souris
function reset() {
  const collecJaune = document.getElementsByClassName("jaune");
  collecJaune[0].src = "Assets/Logos/logohome.png";
  collecJaune[1].src = "Assets/Logos/logo_bat_flèche.png";
  collecJaune[2].src = "Assets/Logos/icon_facebook.png";
  collecJaune[3].src = "Assets/Logos/icon_ig.png";
  collecJaune[4].src = "Assets/Logos/icon_tw.png";
  collecJaune[5].src = "Assets/Logos/logo_bat_flèche_2.png";
}

//reset pour le footer
function resetFooter() {
  const collecJaune = document.getElementsByClassName("jaune_footer");
  collecJaune[0].src = "Assets/Logos/logo_sayna_white.png";
  collecJaune[1].src = "Assets/Logos/icon_x.png";
  collecJaune[2].src = "Assets/Logos/icon_DC.png";
  collecJaune[3].src = "Assets/Logos/icon_facebook.png";
  collecJaune[4].src = "Assets/Logos/icon_ig.png";
  collecJaune[5].src = "Assets/Logos/icon_tw.png";
}

// section popup
// enregistrement des variables necessaire à l'evenement
const confirmbtn = document.getElementById("confirmbtn");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const invalid = document.getElementsByClassName("invalid");

// definition de l'evenement ouverture de overlay
confirmbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (mail.value == "" || message.value == "") {
    invalid[0].textContent = "ce champ e-mail est obligatoire";
    invalid[1].textContent = "ce champ est obligatoire";

    // invalid.style.fontStyle = "italic";
  } else {
    ouvrirFenetre();
  }
});

function ouvrirFenetre() {
  overlay.style.display = "block";
}

btnClose.addEventListener("click", fermerFenetre);

function fermerFenetre() {
  overlay.style.display = "none";
}

// partie formulaire
// frequence de newsletter
const btnFilm = document.getElementById("lbl-films");
const btnComics = document.getElementById("lbl-comics");
const btnTout = document.getElementById("lbl-tout");
const gradient =
  "linear-gradient(90deg, rgba(237, 222, 191, 0.7) 30%, rgba(137, 0, 8, 1) 100%)";

btnFilm.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnComics.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnComics.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnTout.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnComics.style.background = "transparent";
});

// jquery pour le select en utilisant la librairie select2
$(document).ready(function () {
  $(".myselect").select2();
});

// legendes des images de carte
const legendes = document.getElementsByClassName("legende");
const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", () => {
    legendes[i].style.display = "block";
  });
  items[i].addEventListener("mouseout", () => {
    legendes[i].style.display = "none";
  });
}