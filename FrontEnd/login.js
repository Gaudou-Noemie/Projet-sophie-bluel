const categoriesUl = document.querySelector(".categoriesUl");                // On selectionne le ul
console.log(categoriesUl);                                                   // On verifie dans la console


const buttonProjets = document.createElement("button");                      // On crée un bouton
buttonProjets.innerText = "projets";                                         // On le nomme "projets"
buttonProjets.classList.add("nav-btn")                                       // On lui donne une class "nav-btn" 

const buttonContact = document.createElement("button");                      // On crée un bouton
buttonContact.innerText = "contact";                                         // On le nomme "contact"
buttonContact.classList.add("nav-btn")                                       // On lui donne une class "nav-btn"

const buttonLogin = document.createElement("button");                        // On crée un bouton
buttonLogin.innerText = "login";                                             // On le nomme "login"
buttonLogin.classList.add("nav-btn")                                         // on lui donne une class "nav-btn"

const firstLi = categoriesUl.querySelector("li");                            // On selectionne le li "logo"


    categoriesUl.insertBefore(buttonProjets, firstLi);                       // On indique le sens d'affichage
    categoriesUl.insertBefore(buttonContact, firstLi);                       // On indique le sens d'affichage
    categoriesUl.insertBefore(buttonLogin, firstLi);                         // On indique le sens d'affichage

    
    const main = document.querySelector("main");                            // On selectionne le "main"
    buttonLogin.addEventListener("click", function() {                      // On crée une fonction d'écoute sur le bouton login
        document.querySelector("main").innerText = "";                      // On lorsque le bouton est séléctionnée le "main se vide"


    const formulaire = document.createElement("form");                      // On crée un formulaire de connection
    formulaire.innerHTML = "<h2>Log In</h2>";                               // On lui donne le titre "Log In"
    formulaire.classList.add("formLogin");                                  // On lui donne une class "formLogin"



const userMail = document.createElement("input");                           // On crée un imput
userMail.classList.add("userMail");                                         // On lui crée une class "userMail"
const labelMail = document.createElement("label");                          // On lui crée un label
labelMail.innerText= "E-mail";
labelMail.setAttribute("for","E-mail");
userMail.setAttribute("id", "E-mail");
userMail.setAttribute("type", "email");                                     // On lui crée un type "email"



const userPassword = document.createElement("input");                       // On crée un imput
userPassword.classList.add("userPassword");                                 // On lui crée une class "userPassword"
const labelPassword = document.createElement("label");
labelPassword.innerText = "Mot de passe";
labelPassword.setAttribute("for","Password");
userPassword.setAttribute("id", "Password");
userPassword.setAttribute("type", "password");                              // On lui crée un type "password"


const sendBtn = document.createElement("button");                           // On crée un bouton
sendBtn.setAttribute("type", "submit");                                     // De type envoie
sendBtn.innerHTML = "Se connecter";                                         // On lui donne le texte de " Se connecter"
sendBtn.classList.add("sendBtn");                                           // On lui donne une class "sendBtn"


const forgotPassword = document.createElement("p");                         // On créé un paragraphe
forgotPassword.classList.add("forgotPassword");                             // On lui crée une class "forgotPassword"
forgotPassword.innerText = "Mot de passe oublié";                           // Le texte sera "Mot de passe oublié"



formulaire.appendChild(labelMail);

formulaire.appendChild(userMail);                                           // userMail sera l'enfant de formulaire

formulaire.appendChild(labelPassword);
formulaire.appendChild(userPassword);                                       // userPassword sera l'enfant de formulaire
formulaire.appendChild(sendBtn);                                            // sendBtn sera l'enfant de formulaire
formulaire.appendChild(forgotPassword);                                     //forgotPassword sera l'enfant de formulaire


main.appendChild(formulaire);                                               // formulaire sera l'enfant de main
  });      
  
  
// try {
//   const reponse = await fetch ("http://localhost:5678/api/users/login");
//   const login = await reponse.json(); 
//   window.login = login

// }

// console.log("Le bouton 'login' a été cliqué et le formulaire est ajouté à main.");                // On verifie dans la console



//         console.log("Le bouton 'login' a été cliqué");                    
//    



    

    // buttonProjets.addEventListener("click", function() {

    //     console.log("Le bouton 'projets' a été cliqué");
    // });
    
    // buttonContact.addEventListener("click", function() {
    //     console.log("Le bouton 'contact' a été cliqué");
    // });