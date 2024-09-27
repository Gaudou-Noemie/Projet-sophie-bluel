

try{
    const reponse = await fetch("http://localhost:5678/api/categories");   //On récupère les informations de l'API dans "reponse"
    const categories = await reponse.json();                               //On convertie les informations en format json

    const categoriesDiv = document.querySelector(".categoriesDiv");       // Sélection de la div où les boutons seront ajoutés


        
        const allButton = document.createElement("button");                // Créer le bouton "Tous"
        allButton.classList.add("filter-btn");                             // Bouton "Tous" aura une classe nommé "filter-btn"
        allButton.innerHTML = "Tous";                                      // Le texte du bouton "Tous"
        allButton.dataset.id = "btn-Tous";                                 // On lui attribut une id nommée "btn-Tous"

        allButton.addEventListener("click", function(){                    // Fonction d'écoute au click
            document.querySelector(".gallery").innerText = "";             // On vide le text
            generergallery(window.gallery);                                // On génère la gallery
        });

        categoriesDiv.appendChild(allButton);                              // Ajouter le bouton "Tous" à la div des catégories

    categories.forEach((element) => {                                      // Pour categories on crée une boucles pour afficher chaque éléments
        const button = document.createElement("button");                   // On crée un bouton
        button.classList.add("filter-btn")                                 // Ce bouton aura une class nommé "filter-btn"
        button.innerHTML = element.name                                    // le texte à l'interieur du bouton sera le nom données dans l'API
        button.dataset.id = element.id                                     // l'id sera celle donné dans l'API

      
        button.addEventListener("click", function() {                      // Fonction d'écoute au click
        document.querySelector(".gallery").innerText = ""                  // On vide le text 
        const categoryIdToFilter = this.dataset.id;                        // On stock id selectionnée
        const filteredGallery = window.gallery.filter(function(item) {     // Contient la nouvelle version filtré
            return item.categoryId === parseInt(categoryIdToFilter);       // Compare les IDs
       
        });
    console.log("Catégorie filtrée :", categoryIdToFilter);           // On vérifie les données dans la console
    console.log("Galerie filtrée :", filteredGallery);                    // On vérifie les données dans la console
        
   
    generergallery(filteredGallery);                                      // On génère la gallery filtré
    });   
  
        categoriesDiv.appendChild(button);                                      // Bouton devient l'enfant de categoriesDiv
});

} catch (error){
categoriesDiv.innerText = "Erreur lors de la récupération des données catégories";     // On indique l'erreur à l'utilisateur
console.log(error);                                                        // On indique une erreur dans la console
}


