import "./categories.js"                                         // On iporte le fichier categories.js dans projet.js
import "./login.js" 
import "./createModal.js"
import "./modale-modify.js"

window.gallery = [];                                             // On indique que gallery est une variable globale
window.generergallery = generergallery;                          // On rend la fonction generergallery globale



function generergallery(gallery) {                               // On crée une fonction que va generer la gallery
    for (let i=0; i < gallery.length; i++) {                     // On crée une boucle qui va s'executer le nombre de fois qu'il y a d'objet dans gallery

    const projet = gallery[i];                                   // Projet va contenir la valeur de gallery(objet js)

 const divGallery = document.querySelector(".gallery");          // On selection la div  nommé "gallery"      
 const projetElement = document.createElement("article");        // On crée un article qui sera le parent de chaque projet photo
 projetElement.dataset.id = gallery[i].id                        // On recupère id de l'élement
 const imageElement = document.createElement("img");             // On crée une image
 imageElement.src = projet.imageUrl;                             // On recherche la source de l'image et son chemin 
 const titleElement = document.createElement("figcaption");      // On crée figcaption pour l'image
 titleElement.innerText = projet.title;                          // Ajout le nom du titre de l'image
 const categoryElement = projet.category;                        // Ajout de la categorie de l'image
 const userElement = projet.userId;                              // Ajout de userId de l'image




// ajout des éléments enfant
divGallery.appendChild(projetElement);                            // ProjetElement devient l'enfant de divGallery
projetElement.appendChild(imageElement);                          // ImageElement devient l'enfant de projetElement
projetElement.appendChild(titleElement);                          // TitleElement devient l'enfant de projetElement
 }
}


try{                                                               // On lui demande de récuperer les informations de l'API
    const reponse = await fetch("http://localhost:5678/api/works"); // On recupère les donnees de l'API dans "reponse"
    const gallery = await reponse.json();                           // On convertie la réponse en format json
    window.gallery = gallery;                                      // Permet d'accéder globalement a gallery dans le script

    generergallery(gallery);                                       // Appel la fonction avec les données du tableau gallery
    
    console.log("Données de la galerie :", window.gallery);        // Vérification de la réponse
    console.log("Réponse de l'API :", reponse);                    // Vérification de la réponse
    console.log("Données JSON :", gallery);                        // Vérification de la réponse

} catch(error){                                                    // Si il y à une erreur de récupération de données
     divGallery = document.querySelector(".gallery")               // On selection l'endroit ou il peut y avoir une erreur
    divGallery.innerText = "Les données de l'API n'ont pu être récupérées."  //On indique le problème dans divGallery
}
