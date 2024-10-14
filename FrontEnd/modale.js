
 async function createModal() {                                       // Fonction qui crée et affiche la modale
    
    const modal = document.createElement('div');              // Créer la modale
    modal.classList.add('modal');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.width = '400px';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '40px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '1000';
    modal.style.borderRadius = '8px';                        // Ajout d'un coin arrondi pour esthétisme

   
    const closeModalBtn = document.createElement('button'); // Ajouter la croix de fermeture en haut à droite
    closeModalBtn.innerHTML = '&times;';                    // Symbole de la croix
    closeModalBtn.style.position = 'absolute';
    closeModalBtn.style.top = '10px';
    closeModalBtn.style.right = '10px';
    closeModalBtn.style.background = 'transparent';
    closeModalBtn.style.border = 'none';
    closeModalBtn.style.fontSize = '24px';                  // Taille de la croix
    closeModalBtn.style.color = '#000';                     // Couleur de la croix
    closeModalBtn.style.cursor = 'pointer';                 // Curseur en forme de main

    
    const modalContent = document.createElement('div');    // Contenu de la modale
    modalContent.classList.add("mondalContant");
    modalContent.style.display = "grid";
    modalContent.style.gridTemplateColumns = "repeat(5, 1fr)"; 
    modalContent.style.gridTemplateRows = "repeat(3, auto)";
    modalContent.style.gap = ("20px 5px");
    modalContent.style.padding = "30px"

    const modalTitle = document.createElement("p");
    modalTitle.innerText = "Galerie photo";
    modalTitle.style.display = "flex";
    modalTitle.style.justifyContent = "space-around";
    modalTitle.style.marginBottom = "20px"; 
    modalTitle.style.marginTop = "10px";
    modalTitle.style.color = "black";
    modalTitle.style.fontSize = "20px"

    modal.appendChild(modalTitle);    
    modal.appendChild(closeModalBtn);                     // Ajouter la croix à la modale
    modal.appendChild(modalContent);                      // Ajouter le contenu à la modale

   
    const overlay = document.createElement('div');        // Ajouter l'overlay (arrière-plan semi-transparent)
    overlay.classList.add('overlay');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

   
    document.body.appendChild(modal);                     // Ajouter la modale et l'overlay au body
    document.body.appendChild(overlay);

    
    closeModalBtn.addEventListener('click', function() { // Fermer la modale en cliquant sur la croix
        modal.remove();
        overlay.remove();
    });

    
    overlay.addEventListener('click', function() {       // Fermer la modale en cliquant sur l'overlay                
        modal.remove();
        overlay.remove();
    });

  async function generergalleryModale (){

     try {
         const reponse = await fetch("http://localhost:5678/api/works"); // On recupère les donnees de l'API dans "reponse"
         const gallery = await reponse.json();                           // On convertie la réponse en format json
   
   gallery.forEach(projet => {
        const modalElement = document.createElement("article"); 
        modalElement.dataset.id = projet.id;
        const modalImage = document.createElement("img");
        modalImage.src = projet.imageUrl;
        const categoryElement = projet.category;
        const userElement = projet.userId;
        modalImage.style.width = "100%";
       

        modalContent.appendChild(modalElement);
        modalElement.appendChild(modalImage);
       
    }); 
} catch (error){
    modalContent.innerText = "Les données de l'API n'ont pu être récupérées.";
     }
  }
  
generergalleryModale();
}

export { createModal };                                // Exporter la fonction pour l'utiliser dans d'autres fichiers

