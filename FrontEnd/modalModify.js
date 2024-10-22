import { deleteProjet } from "./deleteProjet.js";
import { modalAddForm } from "./modalAddForm.js";

// Fonction d'ajout du titre et du bouton d'ajout
function addTitleAndButton(titleContainer, modalContainer) {          

// Titre de la modale
    const modalTitle = document.createElement("p");                   
        modalTitle.innerText = "Galerie photo";
        modalTitle.classList.add("modalTitle");
        modalTitle.style.display = "flex";
        modalTitle.style.justifyContent = "space-around";
        modalTitle.style.marginBottom = "20px"; 
        modalTitle.style.marginTop = "10px";
        modalTitle.style.color = "black";
        modalTitle.style.fontSize = "20px"
   
// Création du bouton d'ajout de photo
    const btnAdd = document.createElement("button");                  
        btnAdd.classList.add("btnAdd");
        btnAdd.innerText = "Ajouter une photo"
        btnAdd.style.display = "flex";
        btnAdd.style.justifyContent = "space-around";
        btnAdd.style.border = "none";
        btnAdd.style.fontFamily = "Syne";
        btnAdd.style.fontWeight = "300";
        btnAdd.style.color = "white";
        btnAdd.style.backgroundColor = "#1D6154"
        btnAdd.style.margin = "2em auto";
        btnAdd.style.padding = "8px";
        btnAdd.style.width = "250px";
        btnAdd.style.textAlign = "center";
        btnAdd.style.borderRadius = "60px";
        
    titleContainer.appendChild(modalTitle);                           // Ajout du titre à la modale
    modalContainer.appendChild(btnAdd);                               // Ajout du bouton à la modale

 // On vérifie d'abord s'il y a déjà une écoute active
 if (!btnAdd.hasAttribute("data-listened")) {
    btnAdd.addEventListener("click", function(){                  
        modalAddForm();
        
const btnAdd = document.querySelector(".btnAdd");
    btnAdd.style.display = "none";
        console.log("Bouton 'Ajouter une photo' cliqué");
});
    btnAdd.setAttribute("data-listened", "true"); // Pour éviter d'ajouter plusieurs écouteurs
}
    
 }
   
   // Fonction pour generer la galerie dans la modale
async function generergalleryModale (modalContent){

    try {
        const reponse = await fetch("http://localhost:5678/api/works"); // On recupère les donnees de l'API dans "reponse"
        const gallery = await reponse.json();                         // On convertie la réponse en format json
        console.log("Données récupérées :", gallery);
  
gallery.forEach(projet => {                                           // On crée une boucle 
 const modalElement = document.createElement("article"); 
    modalElement.style.position = "relative";
    modalElement.dataset.id = projet.id;

 const modalImage = document.createElement("img");
    modalImage.src = projet.imageUrl;
    const categoryElement = projet.category;
    const userElement = projet.userId;
    modalImage.style.width = "100%";
      
 const deleteBtn = document.createElement("button");                 // Création du bouton poubelle
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';   // Icône poubelle
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "5px";
    deleteBtn.style.right = "5px";
    deleteBtn.style.backgroundColor = "#000";                       // Fond noir
    deleteBtn.style.border = "none";
    deleteBtn.style.width = "15px";                                 // Taille carrée du bouton
    deleteBtn.style.height = "15px";
    deleteBtn.style.borderRadius = "1px";                           // Coins arrondis
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.color = "#fff";                                 // Icône en blanc
    deleteBtn.style.fontSize = "9px";                               // Taille de l'icône
    deleteBtn.style.display = "flex";
    deleteBtn.style.justifyContent = "center";
    deleteBtn.style.alignItems = "center";                          // Centrer l'icône dans le bouton

const modalContent = document.querySelector(".modalContent");

modalElement.appendChild(modalImage);                              // Ajout de l'image à l'article 
modalElement.appendChild(deleteBtn);                               // Ajout de la poubelle à l'article
modalContent.appendChild(modalElement);                            // Ajout de l'article à la div   


deleteBtn.addEventListener("click", async () => {                  // On écoute le bouton supprimée
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette image ?");  // On demande une confirmation
    if (confirmDelete){                                            // Si la demande est confirmée on peut supprimer
           await deleteProjet(projet.id, modalElement);            // On utilise alors la fonction de suppression
         console.log("Image supprimée avec succès! ");             // On fait un console pour vérifier
            
    }
});
      
   }); 

} catch (error){
    console.error("Erreur lors de la récupération des données :", error); // Afficher l'erreur dans la console
   modalContent.innerText = "Les données de l'API n'ont pu être récupérées.";
    }
 }

 export { addTitleAndButton, generergalleryModale } ;
 

