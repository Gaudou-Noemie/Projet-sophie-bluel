import { createModal } from './createModal.js';

const categoriesUl = document.querySelector(".categoriesUl");                // On selectionne le ul
console.log(categoriesUl);                                                   // On verifie dans la console


const divEdition = document.createElement("div");                            // On crée une div
divEdition.classList.add("divEdition");                                      // On lui donne une classe "divEdition"
divEdition.style.display = "none"                                            // On la cache

const iModify1 = document.createElement("i");                                // On crée un i nommé iModifiy1
iModify1.classList.add("fa-regular", "fa-pen-to-square");                    // On lui donne une class

const textModify1 = document.createTextNode(" Mode édition");                // On lui donne une class "textModify1"

const body = document.querySelector("body");                                 // on récupère le "body"
body.appendChild(divEdition);                                                // divEdition sera l'enfant de header
divEdition.appendChild(iModify1);                                            // iModify1 sera l'enfant de divEdition
divEdition.appendChild(textModify1);                                         // textModify1 sera l'enfant de iModify1

const header = document.querySelector("header");                             // On récupère le "header"
body.insertBefore(divEdition, header);                                       // On indique le positionnement


const buttonProjets = document.createElement("button");                      // On crée un bouton
buttonProjets.innerText = "projets";                                         // On le nomme "projets"
buttonProjets.classList.add("nav-btn")                                       // On lui donne une class "nav-btn" 

const buttonContact = document.createElement("button");                      // On crée un bouton
buttonContact.innerText = "contact";                                         // On le nomme "contact"
buttonContact.classList.add("nav-btn")                                       // On lui donne une class "nav-btn"

const buttonLogin = document.createElement("button");                        // On crée un bouton
buttonLogin.innerText = "login";                                             // On le nomme "login"
buttonLogin.classList.add("nav-btn")                                         // On lui donne une class "nav-btn"

const buttonLogout = document.createElement("button");                       // On crée un bouton
buttonLogout.innerText = "logout";                                           // On le nomme "logout"
buttonLogout.classList.add("nav-btn");                                       // On lui donne une class "nav-btn"
buttonLogout.style.display = 'none'                                          // On le cache

const firstLi = categoriesUl.querySelector("li");                            // On selectionne le li "logo"


    categoriesUl.insertBefore(buttonProjets, firstLi);                       // On indique le sens d'affichage
    categoriesUl.insertBefore(buttonContact, firstLi);                       // On indique le sens d'affichage
    categoriesUl.insertBefore(buttonLogin, firstLi);                         // On indique le sens d'affichage
    categoriesUl.insertBefore(buttonLogout, firstLi);                        // On indique le sens d'affichage
    
const main = document.querySelector("main");                                 // On selectionne le "main"

    buttonLogin.addEventListener("click", function() {                       // On crée une fonction d'écoute sur le bouton login
        document.querySelector("main");                                      // On sélectionne le "main"
        main.style.display = 'none';                                         // On le fait disparaitre sans le supprimer
        
  

 const loginContainer = document.createElement("div");                       // On crée une div nommée "loginContainer"
    loginContainer.classList.add("login-container");                         // On lui donne une class "login-container"


const formulaire = document.createElement("form");                           // On crée un formulaire de connection
    formulaire.innerHTML = "<h2>Log In</h2>";                                // On lui donne le titre "Log In"
    formulaire.classList.add("formLogin");                                   // On lui donne une class "formLogin"


const divMail = document.createElement("div");                               // On crée une div nommée "divMail"
    divMail.classList.add("divMail");                                        // On lui donne la class "divMail"

const userMail = document.createElement("input");                            // On crée un imput
    userMail.classList.add("userMail");                                      // On lui crée une class "userMail"
const labelMail = document.createElement("label");                           // On lui crée un label
    labelMail.innerText= "E-mail";                                           // Le texte sera "E-mail"
    labelMail.setAttribute("for","email");                                   // On crée un for "email"
    userMail.setAttribute("id", "e-mail");                                   // On crée un id "email"
    userMail.setAttribute("type", "email");                                  // On lui crée un type "email"



const userPassword = document.createElement("input");                        // On crée un imput
    userPassword.classList.add("userPassword");                              // On lui crée une class "userPassword"

const labelPassword = document.createElement("label");                       // On lui crée un label
    labelPassword.innerText = "Mot de passe";                                // le texte sera "Mot de passe"
    labelPassword.setAttribute("for","password");                            // On lui crée un for "password"
    userPassword.setAttribute("id", "password");                             // On lui crée un id "password"
    userPassword.setAttribute("type", "password");                           // On lui crée un type "password"


const divPassword = document.createElement("div");                           // On crée une div nommée "divPassword"
    divPassword.classList.add("divPassword")                                 // On lui donne une class "divPassword"

const sendBtn = document.createElement("button");                            // On crée un bouton
    sendBtn.setAttribute("type", "submit");                                  // De type envoie
    sendBtn.innerHTML = "Se connecter";                                      // On lui donne le texte de " Se connecter"
    sendBtn.classList.add("sendBtn");                                        // On lui donne une class "sendBtn"


const forgotPassword = document.createElement("p");                          // On créé un paragraphe
    forgotPassword.classList.add("forgotPassword");                          // On lui crée une class "forgotPassword"
    forgotPassword.innerText = "Mot de passe oublié";                        // Le texte sera "Mot de passe oublié"


formulaire.appendChild(divMail)                                              // divMail sera l'enfant de formulaire
divMail.appendChild(labelMail);                                              // labelMail sera l'enfant de divMail
divMail.appendChild(userMail);                                               // userMail sera l'enfant de formulaire

formulaire.appendChild(divPassword)                                          // divPassword sera l'enfant de formulaire
divPassword.appendChild(labelPassword);                                      // labelPassword sera l'enfant de divPassword
divPassword.appendChild(userPassword);                                       // userPassword sera l'enfant de formulaire


formulaire.appendChild(sendBtn);                                             // sendBtn sera l'enfant de formulaire
formulaire.appendChild(forgotPassword);                                      // forgotPassword sera l'enfant de formulaire


main.appendChild(formulaire);                                                // Formulaire sera l'enfant de main
loginContainer.appendChild(formulaire);                                      // Formulaire est l'enfant de loginContainer

const body =document.querySelector("body");                                  // On selectionne body
body.appendChild(loginContainer);                                            // loginContainer sera l'enfant de body
const footer = document.querySelector("footer");                             // On séléctionne footer
body.insertBefore(loginContainer, footer);                                   // On indique le sens d'insertion 
  
formulaire.addEventListener("submit", async (e) => {                         // On écoute le bouton d'envoie du formulaire
  e.preventDefault();                                                        // On arrête l'évènement de rechargement
  console.log(userMail.value, userPassword.value)                            // On vérifie les données dans la console
  
  if (!userMail.value) {                                                     // Si userMail est vide on l'indique
 
   alert("L'email est requis.");                                             // On affiche un message d'alerte

} else if (!userPassword.value){                                             // Si userPassword est vide on l'indique
    alert("Le mode de passe est requis.");                                   // On affiche un message d'alerte
} else{
    try {
        const res = await fetch("http://localhost:5678/api/users/login", {   // On récupère les données de l'API
            method: "POST",                                                  // On lui envoie les données avec POST
            headers: {"Content-Type": "application/json"},                   // En format json
            body: JSON.stringify({                                           // On converti les données en json
                email: userMail.value,                                       // On envoie les valeurs de userMail
                password: userPassword.value                                 // On envoie les valeurs de userPassword
            })
        });

    if (res.ok) {                                                            // Si res est ok 
        const data = await res.json();                                       // On convertie en json
            console.log("connexion réussie:", data);                         // On vérifie dans la console
            loginContainer.style.display = 'none';                           // Masquer le conteneur de connexion
            main.style.display = 'block';                                    // Réaffiche le "main"
            divEdition.style.display = 'flex'                                // On réaffiche la "divEdition"
            buttonLogout.style.display = "block"                             // Réaffiche le "logout"
            buttonLogin.style.display = "none"                               // On cache le "login"

        const categoriesDiv = document.querySelector(".categoriesDiv");      // On récupère la div
            categoriesDiv.style.display = 'none';                            // On la masque 
            localStorage.setItem("token", data.token)                        // On stock le token dans le localstorage

        
        const iModify = document.createElement("i")                          // On crée un i nommé iModifiy
            iModify.classList.add("fa-regular", "fa-pen-to-square");         // On lui donne une class
            iModify.style.paddingRight = "5px";

 
        const btnModify = document.createElement("button");                  // On crée une bouton "btnModify"
            btnModify.classList.add("btnModify");                            // On lui donne une class "btnModify"
            btnModify.appendChild(iModify);                                  // iModify devient l'enfant de btnModify

        const textModify = document.createTextNode("   modifier");           // On crée le texte de textModify
          btnModify.appendChild(textModify);                                 // textModify devient l'enfant de btnModify

    
     
        const sectionModify = document.getElementById("portfolioT");         // On récupère la section portfolio
          sectionModify.style.marginBottom = "70px";
          sectionModify.insertAdjacentElement("afterend", btnModify);        // On indique le sens d'affichage
          sectionModify.appendChild(btnModify);                              // btnModify sera l'enfant de sectionModify
       
    const galleryDiv = document.querySelector(".gallery");                   // On récupère la galerie 
        galleryDiv.parentNode.insertBefore(sectionModify, galleryDiv);       // On insert la section avant la galerie
        galleryDiv.innerText = "";
       generergallery(window.gallery);                                       // On génère la gallery

    const openModalBtn = document.querySelector(".btnModify");               // On récupère le bouton "btnModify"
  
    openModalBtn.addEventListener("click", function() {                      // On écoute le bouton
   
    createModal();                                                           // Appeler la fonction de création de la modale depuis le fichier modale.js
    
});

        } else {
            alert("Erreur dans l’identifiant ou le mot de passe.");          // Si ça ne fonctionne pas on envoie une alerte
        }
    } catch (error) {                                                        // Si rien ne fonctionne on envoie une alerte
        console.error ("Erreur lors de la connexion:", error);
        alert("Erreur de connexion. Veuillez réessayer.");
    }
}

}); 
}); 

