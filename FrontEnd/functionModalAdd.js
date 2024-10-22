
async function fetchCategory(categoryInput){
    console.log("Récupération des catégories depuis l'API");
    try {
        const rep = await fetch("http://localhost:5678/api/categories");
        if (!rep.ok) {
            throw new Error("Erreur lors de la récupération des catégories"); 
        } 
        const categories = await rep.json();
        console.log("Catégories récupérées:", categories);
       
        categories.forEach((category) => {                                 // On fait une boucle pour récupérer les categorie
            const option = document.createElement("option");               // On crée une option
            option.value = category.id;                                    // La valeur sera id de catégorie
            option.textContent = category.name;                            // Le texte sera le name de catégorie
            categoryInput.appendChild(option);                             // On ajout option a categoryInput            
        });
    } catch (error){
        console.error("Erreur lors de la récupération des catégories:", error);
    }
 }  

 function createErrorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.style.backgroundColor = "#FF6F61";             // Couleur rouge pour l'erreur
    errorMessage.style.color = "white";
    errorMessage.style.padding = "10px";
    errorMessage.style.margin = "10px 0";
    errorMessage.style.borderRadius = "5px";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.textAlign = "center";
    errorMessage.innerText = message;
    errorMessage.classList.add("error-message");
    return errorMessage;
}

function createSuccessMessage(message) {
    const successMessage = document.createElement("div");
    successMessage.style.backgroundColor = "#4CAF50";          // Couleur verte pour le succès
    successMessage.style.color = "white";
    successMessage.style.padding = "15px";
    successMessage.style.margin = "10px 0";
    successMessage.style.borderRadius = "5px";
    successMessage.style.fontSize = "16px";
    successMessage.style.textAlign = "center";
    successMessage.innerText = message;
    successMessage.classList.add("success-message");
    return successMessage;
}

function showSuccessMessage(message){
    const successMessage = createSuccessMessage(message);
    const main = document.querySelector("main");
    main.prepend(successMessage);                         // Ajouter le message en haut du formulaire

         // Cacher le message après quelques secondes
         setTimeout(() => {
             successMessage.style.display = "none";
         }, 3000); // Cacher après 3 secondes
    }


    function closeModal(){
        const modal = document.querySelector(".modal");
      const overlay = document.querySelector(".overlay");
      if (modal) modal.remove();
      if (overlay) overlay.remove();
  }

  export { createErrorMessage, fetchCategory, closeModal, showSuccessMessage };