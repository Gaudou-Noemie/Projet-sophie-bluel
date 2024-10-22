// On crée une fonction de suppression 
async function deleteProjet (projetId , modalElement){       
    // On envoie une requête de suppression à l'ApI                          
    try {
        const reponse = await fetch (`http://localhost:5678/api/works/${projetId}`, {
           method: "DELETE",
           headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
            }
        });

        if (reponse.ok) {                                           // Si la requête est ok 
            document.querySelector(".modal").remove();
            document.querySelector(".overlay").remove();

            try{                                                               // On lui demande de récuperer les informations de l'API
                const reponse = await fetch("http://localhost:5678/api/works"); // On recupère les donnees de l'API dans "reponse"
                const gallery = await reponse.json();                           // On convertie la réponse en format json
                window.gallery = gallery;                                      // Permet d'accéder globalement a gallery dans le script
                const divGallery = document.querySelector(".gallery"); 
                divGallery.innerText = "";
                generergallery(gallery);                                       // Appel la fonction avec les données du tableau gallery
                
                console.log("Données de la galerie :", window.gallery);        // Vérification de la réponse
                console.log("Réponse de l'API :", reponse);                    // Vérification de la réponse
                console.log("Données JSON :", gallery);                        // Vérification de la réponse
            
            } catch(error){                                                    // Si il y à une erreur de récupération de données
                 divGallery = document.querySelector(".gallery")               // On selection l'endroit ou il peut y avoir une erreur
                divGallery.innerText = "Les données de l'API n'ont pu être récupérées."  //On indique le problème dans divGallery
                console.error("Erreur lors de la récupération des données :", error);
            }
            
            console.log(" Image supprimée avec succès.");           // On vérifie dans la console
        } else {
           // Si il y à une erreur on l'indique 
            console.error("Erreur lors de la suppression de l'image :", reponse.statusText);
        }
   } catch (error){
    console.error("Erreur lors de la suppression :", error);
   }
};

export {deleteProjet};