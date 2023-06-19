const urlQuestion = "./json/questions.json";

// recolte data API question
fetch(urlQuestion)
  .then((result) => result.json())
  .then((data) => populate(data))
  .catch((error) => {
    console.error(`erreur de chargemenr de data ${error}`);
  });

// recolte data API perso url image
async function getDataImage() {
  try {
    const urlImage = "./json/urlimage.json";
    const reponse = await fetch(urlImage);
    const imageFile = await reponse.json();
    return imageFile;
  } catch (error) {
    console.error(`erreur de chargement de img ${error}`);
  }
}
// score
let score = 0;
// compteur tableau
let j = 1;

// partie general quiz
const conteneurQuiz = document.querySelector(".conteneurQuiz");
const btnQuiz = document.querySelector(".btn-quiz");
const img = document.querySelector(".carte-img img");
const compteur = document.querySelector(".num-question");
const totalQuestion = document.querySelector(".total-question");
const question = document.querySelector(".carte-question p");
const reponses = document.getElementsByClassName("qcm-label");
const radioReponse = document.getElementsByClassName("qcm-radio");
const btnSuivant = document.querySelector(".btn-suivant");
const divBtn = document.querySelector(".btn");

// rajout image supplementaire
const illustrGauche = document.querySelector(".illustr-gauche");
const illustrDroite = document.querySelector(".illustr-droite");
const imgGauche = document.createElement("img");
const imgDroite = document.createElement("img");
illustrDroite.appendChild(imgDroite);
illustrGauche.appendChild(imgGauche);

// controlleur reponse
const controller = document.querySelector(".controller");

// reponse de quiz
const choix1 = document.getElementById("choix1");
const choix2 = document.getElementById("choix2");
const choix3 = document.getElementById("choix3");

// popup
const overlayGame = document.querySelector(".overlay-game");
const popupTitre = document.querySelector(".popup-titre");
const popupTexte = document.querySelector(".popup-texte");
const btnRestart = document.querySelector(".restart");

// changement de comportement de checkbox
function checkLikeRadio() {
  for (let i = 0; i < radioReponse.length; i++) {
    radioReponse[i].checked = false;
    radioReponse[i].addEventListener("click", () => {
      checkLikeRadio();
      radioReponse[i].checked = true;
    });
  }
}

checkLikeRadio();

// partie score
function isScore(data) {
  if (
    (choix1.checked && data[j - 1].response[0].isGood === true) ||
    (choix2.checked && data[j - 1].response[1].isGood === true) ||
    (choix3.checked && data[j - 1].response[2].isGood === true)
  ) {
    score += 1;
    return score;
  } else {
    score += 0;
    return score;
  }
}

// partie changement carte quiz de page en page
function changeCarte(data) {
  compteur.innerHTML = `${j + 1}`;
  totalQuestion.innerHTML = `${data.length}`;
  //   fabriquer un json correspondant aux questions
  const promiseImageFile = getDataImage();
  promiseImageFile.then((dataImage) => {
    img.src = dataImage[j - 1].src;
  });
  question.textContent = data[j].question;

  for (let i = 0; i < reponses.length; i++) {
    reponses[i].textContent = data[j].response[i].text;
  }
}

function initialiseCarte(data) {
  j = 1;
  score = 0;
  imgGauche.src = "";
  imgDroite.src = "";
  compteur.textContent = "1";
  totalQuestion.innerHTML = `${data.length}`;
  img.src = "../Assets/Illustrations-game/Batgame_3.png";
  question.textContent = data[0].question;
  for (let i = 0; i < reponses.length; i++) {
    reponses[i].textContent = data[0].response[i].text;
  }
  conteneurQuiz.style.display = "flex";
}

function populate(data) {
  // ititialisation du quiz
  btnQuiz.addEventListener("click", () => {
    initialiseCarte(data);
  });

  btnSuivant.addEventListener("click", () => {
    if (
      choix1.checked === false &&
      choix2.checked === false &&
      choix3.checked === false
    ) {
      controller.textContent = "veuillez choisir une reponse";
    } else {
      controller.textContent = "";
      while (j <= data.length) {
        if (j === data.length) {
          isScore(data);
          if (score <= 4) {
            popupTitre.textContent = `${score}/${data.length} C'EST PAS TOUT A FAIT ÇA...`;
            popupTexte.textContent = `Oula! Heureusement que le Riddler est sous les verrous...Il faut que vous vous repassiez les film,cette fois en enlevant peut-être le masque qui vous a bloqué la vue! Aller, rien n'est perdu!`;
          } else if (score <= 8) {
            popupTitre.textContent = `${score}/${data.length} PAS MAL !`;
            popupTexte.textContent = `Encore un peu d'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute vos connaissances sont là. A vous de les consolider, foncez Gotham est votre terrain de chasse !`;
          } else {
            popupTitre.textContent = `${score}/${data.length} BRAVO !`;
            popupTexte.textContent = `Vous êtes veritablement un super fan de l'univers de Batman! Comics,films, rien ne vous échappe. Bruce Waynea de quoi être fier,Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains !`;
          }
          overlayGame.style.display = "block";
          j++;
        } else if (j === 6) {
          imgGauche.src = "../Assets/illustrations-game/Batgame_13-1.png";
          imgDroite.src = "../Assets/illustrations-game/Batgame_13.png";
          divBtn.style.marginTop = "0px";
          isScore(data);
          changeCarte(data);
          j++;
          break;
        } else {
          imgGauche.src = "";
          imgDroite.src = "";
          divBtn.style.marginTop = "70px";
          isScore(data);
          changeCarte(data);
          j++;
          break;
        }
      }
    }
  });
  btnRestart.addEventListener("click", () => {
    overlayGame.style.display = "none";
    initialiseCarte(data);
  });
}
