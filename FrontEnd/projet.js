const reponse = await fetch("http://localhost:5678/api/works"); //on recupère les donnees de l'API dans "reponse"
const gallery = await reponse.json();                            //on convertie la réponse en format json
//  gallery = JSON.parse(gallery);                               //on convertie le format json en objet javascripts


function generergallery(gallery) {                               // on crée une fonction que va generer la gallery
    for (let i=0; i < gallery.length; i++) {                     // on crée une boucle qui va s'executer le nombre de fois qu'il y a d'objet dans gallery

   const projet = gallery[i];                                      //projet va contenir la valeur de gallery(objet js)

 const divGallery = document.querySelector(".gallery");          //on selection la div  nommé "gallery"
 const projetElement = document.createElement("article");        // on crée un article qui sera le parent de chaque projet photo
 projetElement.dataset.id = gallery[i].id                        // on recupère id de l'élement
 const imageElement = document.createElement("img");             // on crée une image
 imageElement.src = projet.imageUrl;                             // on recherche la source de l'image et son chemin 
 const titleElement = document.createElement("figcaption");      //on crée figcaption pour l'image
 titleElement.innerText = projet.title;                          // ajout le nom du titre de l'image
 const categoryElement = gallery[i].categoryId;                   // ajout de la categorie de l'image
 const userElement = gallery[i].userId;                           // ajout de userId de l'image




// ajout des éléments enfant
divGallery.appendChild(projetElement);                            // projetElement devient l'enfant de divGallery
projetElement.appendChild(imageElement);                          //imageElement devient l'enfant de projetElement
projetElement.appendChild(titleElement);                          //titleElement devient l'enfant de projetElement
 }
}

generergallery(gallery);                                           //appel la fonction avec les données du tableau gallery