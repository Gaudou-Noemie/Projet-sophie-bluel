
try{
    const reponse = await fetch("http://localhost:5678/api/categories");    //on récupère les informations de l'API dans "reponse"
    const categories = await reponse.json();                               //on convertie les informations en format json
    


    categories.forEach((element) => {                                 // pour categories on crée une boucles pour afficher chaque éléments
        const button = document.createElement("button");                  //on crée un bouton
        button.classList.add("filter-btn")                                //ce bouton aura une class nommé "filter-btn"
        button.innerHTML = element.name                               //le texte à l'interieur du bouton sera le nom données dans l'API
        button.dataset.id = element.id                                  //l'id sera celle donné dans l'API

      
        button.addEventListener("click", function() {
            document.querySelector(".gallery").innerText = ""
        const categoryIdToFilter = this.dataset.id;
        const filteredGallery = gallery.filter(function(item) {
            return item.categoryElement === parseInt(categoryIdToFilter);  // Compare les IDs
        
        });
        
    document.querySelector(".gallery").innerHTML = ""
    generergallery(filteredGallery);
    });   
  
   categoriesDiv.appendChild(button);                                //bouton devient l'enfant de categoriesDiv
});

} catch (error){
categoriesDiv.innerText = "Erreur lors de la récupération des données catégories";
console.log(error);
}


