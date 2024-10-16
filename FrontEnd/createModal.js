import { addTitleAndButton, generergalleryModale } from './modalModify.js';


async function createModal() {                                 // Fonction qui crée et affiche la modale
    console.log("Création de la modale normale");
    
const modal = document.createElement('div');               // Création de la modale
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
    modal.style.borderRadius = '8px';                          // Ajout d'un coin arrondi pour esthétisme


const closeModalBtn = document.createElement('button');    // Ajouter la croix de fermeture en haut à droite
    closeModalBtn.innerHTML = '&times;';                       // Symbole de la croix
    closeModalBtn.style.position = 'absolute';
    closeModalBtn.style.top = '10px';
    closeModalBtn.style.right = '10px';
    closeModalBtn.style.background = 'transparent';
    closeModalBtn.style.border = 'none';
    closeModalBtn.style.fontSize = '24px';                     // Taille de la croix
    closeModalBtn.style.color = '#000';                        // Couleur de la croix
    closeModalBtn.style.cursor = 'pointer';                    // Curseur en forme de main

    
    const closeModalBack = document.createElement('button'); // Ajouter la fleche retour
    closeModalBack.style.display = "none"
    closeModalBack.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';                    // Symbole de la croix
    closeModalBack.style.position = 'absolute';
    closeModalBack.style.top = '10px';
    closeModalBack.style.left = '10px';
    closeModalBack.style.background = 'transparent';
    closeModalBack.style.border = 'none';
    closeModalBack.style.fontSize = '18px';                  // Taille de la croix
    closeModalBack.style.color = '#000';                     // Couleur de la croix
    closeModalBack.style.cursor = 'pointer';                 // Curseur en forme de main


const overlay = document.createElement('div');             // Ajouter l'overlay (arrière-plan semi-transparent)
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
       modalContainer.style.display = 'flex';
       modalContainer.style.flexDirection = 'column';
       modalContainer.style.height = '100%'; // Utiliser toute la hauteur
       modalContainer.style.overflowY = 'auto'; // Permettre le défilement si nécessaire


   // Créer un conteneur pour le titre
    const titleContainer = document.createElement('div');
    titleContainer.style.textAlign = 'center';
    titleContainer.style.marginBottom = '20px'; // Espacement entre le titre et la grille

    const modalContent = document.createElement('div'); // Créer le contenu de la modale
    modalContent.classList.add("modalContent");
    modalContent.style.display = "grid";
    modalContent.style.gridTemplateColumns = "repeat(5, 1fr)"; 
    modalContent.style.gridTemplateRows = "repeat(3, auto)";
    modalContent.style.gap = ("20px 7px");
    modalContent.style.padding = "30px";
    modalContent.style.marginBottom = "10px";
    modalContent.style.borderBottom = "1px solid #B3B3B3";

    
  
   
    modalContainer.appendChild(titleContainer);
    modalContainer.appendChild(modalContent);                  // Ajout de modalContent dans la modale

    modal.appendChild(closeModalBtn);                          // Ajout la croix à la modale
    modal.appendChild(closeModalBack);
    modal.appendChild(modalContainer); 

    document.body.appendChild(modal);                          // Ajoute de la modale au body
    document.body.appendChild(overlay);                        // Ajout de l'overlay au body
    

closeModalBtn.addEventListener('click', function() {       // Fermer la modale en cliquant sur la croix
        modal.remove();
        overlay.remove();
    });   

    
overlay.addEventListener('click', function() {             // Fermer la modale en cliquant sur l'overlay                
        modal.remove();
        overlay.remove();
    });  

addTitleAndButton(titleContainer, modalContainer);

await generergalleryModale(modalContent);

}

export { createModal };                                        // Exporter la fonction pour l'utiliser dans d'autres fichiers
