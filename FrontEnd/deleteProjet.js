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
            modalElement.remove();                                  // On supprime l'élément 
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