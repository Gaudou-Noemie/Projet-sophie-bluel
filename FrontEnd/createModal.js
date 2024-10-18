import { addTitleAndButton, generergalleryModale } from './modalModify.js';

 // Fonction qui crée et affiche la modale
async function createModal() {                                
    console.log("Création de la modale normale");

    // Création de la modale
const modal = document.createElement('div');     
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
    modal.style.borderRadius = '8px';

 // Ajouter la croix de fermeture en haut à droite
const closeModalBtn = document.createElement('button');
    closeModalBtn.innerHTML = '&times;';                       // Symbole de la croix
    closeModalBtn.style.position = 'absolute';
    closeModalBtn.style.top = '10px';
    closeModalBtn.style.right = '10px';
    closeModalBtn.style.background = 'transparent';
    closeModalBtn.style.border = 'none';
    closeModalBtn.style.fontSize = '24px';                    
    closeModalBtn.style.color = '#000';                        
    closeModalBtn.style.cursor = 'pointer';                    // Curseur en forme de main

    // Ajouter la fleche retour
    const closeModalBack = document.createElement('button');
    closeModalBack.classList.add("closeModalBack");
    closeModalBack.style.display = "none"
    closeModalBack.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'; // Symbole de la flèche
    closeModalBack.style.position = 'absolute';
    closeModalBack.style.top = '10px';
    closeModalBack.style.left = '10px';
    closeModalBack.style.background = 'transparent';
    closeModalBack.style.border = 'none';
    closeModalBack.style.fontSize = '18px';                  
    closeModalBack.style.color = '#000';                     
    closeModalBack.style.cursor = 'pointer';                 // Curseur en forme de main

 // Ajouter l'overlay (arrière-plan semi-transparent)
  const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

 // Conteneur principal de la modale
    const modalContainer = document.createElement('div');
       modalContainer.classList.add("modalContainer");
       modalContainer.style.display = 'flex';
       modalContainer.style.flexDirection = 'column';
       modalContainer.style.height = '100%';                 
       modalContainer.style.overflowY = 'auto';              


// Créer un conteneur pour le titre
    const titleContainer = document.createElement('div');
       titleContainer.style.textAlign = 'center';
       titleContainer.style.marginBottom = '20px';               


// Créer le contenu de la modale
    const modalContent = document.createElement('div');
       modalContent.classList.add("modalContent");
       modalContent.style.display = "grid";
       modalContent.style.gridTemplateColumns = "repeat(5, 1fr)"; 
       modalContent.style.gridTemplateRows = "repeat(3, auto)";
       modalContent.style.gap = ("20px 7px");
       modalContent.style.padding = "30px";
       modalContent.style.marginBottom = "10px";
       modalContent.style.borderBottom = "1px solid #B3B3B3";

   
    modalContainer.appendChild(titleContainer);                 // Ajout de titleModal dans la modaleContainer
    modalContainer.appendChild(modalContent);                  // Ajout de modalContent dans la modaleContainer
    modal.appendChild(closeModalBtn);                          // Ajout la croix à la modale
    modal.appendChild(closeModalBack);                         // Ajout de la flèche reetour dans la modale
    modal.appendChild(modalContainer);                         // Ajout de modalContainer dans la modale
    document.body.appendChild(modal);                          // Ajoute de la modale au body
    document.body.appendChild(overlay);                        // Ajout de l'overlay au body
    

closeModalBtn.addEventListener('click', function() {       // Fermer la modale en cliquant sur la croix
        modal.remove();
        overlay.remove();
    });   

    closeModalBack.addEventListener("click", function (){
        clickcloseModalBack(modal,overlay)
        console.log("J'ai cliqué sur le bouton retour");
    });

overlay.addEventListener('click', function() {             // Fermer la modale en cliquant sur l'overlay                
        modal.remove();
        overlay.remove();
    });  

addTitleAndButton(titleContainer, modalContainer);         // On lance la fonction du titre et du container

await generergalleryModale(modalContent);                 // On lance la fonction pour generer la galerie


function clickcloseModalBack(modal,overlay){
    modal.remove();
    overlay.remove();
    createModal();
};

}

export { createModal };                                    // Exporter la fonction pour l'utiliser dans d'autres fichiers
