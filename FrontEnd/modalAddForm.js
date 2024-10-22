import { createErrorMessage, fetchCategory, closeModal, showSuccessMessage } from './functionModalAdd.js'; // Import des fonctions

function modalAddForm () {

    const mondalTitle = document.querySelector(".modalTitle");
        mondalTitle.innerText = "Ajout photo";
        mondalTitle.style.marginBottom = "0px"

    const btnAdd = document.querySelector(".btnAdd");
        btnAdd.style.display = "none";

    const closeModalBack = document.querySelector(".closeModalBack")
        closeModalBack.style.display = "block"
        console.log("Bouton retour affiché");

    const modalContent = document.querySelector(".modalContent");
        modalContent.innerHTML = "";
        modalContent.style.display = "flex";
        modalContent.style.flexDirection = "column";
        modalContent.style.padding = "10px 30px";
        modalContent.style.margin = "0px";
        console.log("Contenu de la modale vidé");  

    const modalForm = document.createElement("form");                       // On crée un formulaire
        modalForm.classList.add("modalForm");
        modalForm.setAttribute("id", "modalForm");  
        modalForm.style.display= "flex";
        modalForm.style.flexDirection = "column";
        // modalForm.style.height = "200px";
        modalForm.style.justifyContent = "space-around";
        modalForm.style.alignItems = "center";

          // Création de l'input fichier
    const fileInputWrapper = document.createElement("div");
        fileInputWrapper.style.position = "relative";
        fileInputWrapper.style.width = "100%";
        fileInputWrapper.style.height = "169px";
        fileInputWrapper.style.display = "flex";
        fileInputWrapper.style.flexDirection = "column";
        fileInputWrapper.style.justifyContent = "center";
        fileInputWrapper.style.alignItems = "center";
        fileInputWrapper.style.backgroundColor = "#E8F1F6"
        fileInputWrapper.style.cursor = "pointer";
        fileInputWrapper.style.padding = "10px";
        fileInputWrapper.style.marginBottom = "15px";

         // Icône Font Awesome par défaut
    const icon = document.createElement("i");
        icon.classList.add("fa-regular", "fa-image");
        icon.style.fontSize = "60px";  // Taille de l'icône
        icon.style.color = "#B9C5CC";  // Couleur de l'icône

    fileInputWrapper.appendChild(icon);

    const fileInput = document.createElement("input");                     // On crée un input d'envoie de fichier
        fileInput.setAttribute("type", "file") ;
        fileInput.setAttribute("accept", "image/png, image.jpeg");
        fileInput.setAttribute("required", "true");
        fileInput.style.display = "none";
        fileInputWrapper.appendChild(fileInput);
    console.log("Input fichier créé");

  // Création du texte "+ Ajouter photo"
    const addPhotoText = document.createElement("span");
        addPhotoText.innerText = "+ Ajouter photo";
        addPhotoText.style.fontSize = "16px";
        addPhotoText.style.color = "#306685";
        addPhotoText.style.backgroundColor = "#CBD6DC";  // Couleur gris
        addPhotoText.style.padding = "10px 20px";
        addPhotoText.style.margin = "10px 0";
        addPhotoText.style.borderRadius = "50px";
        addPhotoText.style.width = "125px";
        addPhotoText.style.textAlign = "center";
        addPhotoText.style.cursor = "pointer";
        addPhotoText.style.display = "inline-block";  // Pour qu'il se comporte comme un bouton
        addPhotoText.style.textDecoration = "none";  // Pour enlever la décoration de texte par défaut
        addPhotoText.style.transition = "background-color 0.3s ease";  // Ajout d'une transition au survol
        fileInputWrapper.appendChild(addPhotoText);

    const fileSizeText = document.createElement("span");
        fileSizeText.innerText = "jpg, png : 4 Mo max";
        fileSizeText.style.fontSize = "10px";
        fileSizeText.style.color = "#666";
    fileInputWrapper.appendChild(fileSizeText);

     // Créer un espace pour afficher l'image sélectionnée
     const imagePreview = document.createElement("img");
        imagePreview.style.maxWidth = "100%";
        imagePreview.style.maxHeight = "188px";
        imagePreview.style.display = "none";
     fileInputWrapper.appendChild(imagePreview);

         // Lorsque l'utilisateur clique sur "+ Ajouter photo"
    addPhotoText.addEventListener("click", () => {
        fileInput.click();  // Ouvre le dialogue de fichier
    });


     fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];

            // Supprimer les anciens messages d'erreur liés à l'image
    const errorMessages = fileInputWrapper.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.remove()); // Enlever tous les messages d'erreur précédents

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = "block";
                icon.style.display = "none";  // Masquer l'icône après la sélection de l'image
                addPhotoText.style.display = "none";  // Masquer le texte après la sélection de l'image
                fileSizeText.style.display = "none"; 
            };
            reader.readAsDataURL(file);
        }
    });
// Retirer l'attribut "required" de l'input fichier
fileInput.removeAttribute('required');  // Le rendre non requis par le formulaire


  const titleInput = document.createElement("input");                     // On crée un input 
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "titre");
        titleInput.setAttribute("required", "true");                        // Rendre le champ requis
        titleInput.style.border = "none";
        titleInput.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        titleInput.style.width = "100%";
        titleInput.style.height = "51px";
        titleInput.style.marginBottom = "10px"

 const labelTitle = document.createElement("label");
        labelTitle.innerText = "Titre";
        labelTitle.setAttribute("for", "titre");
        labelTitle.style.display = "flex";
        labelTitle.style.justifyContent = "flex-start";
        labelTitle.style.width = "100%";
        labelTitle.style.margin = "10px"
        console.log("Input titre créé");

  const categoryInput = document.createElement("select");                 // On crée un select
        categoryInput.setAttribute("id", "category");
        categoryInput.setAttribute("required", "true");                     // Rendre le champ requis
        categoryInput.style.border = "none";
        categoryInput.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        categoryInput.style.width = "100%";
        categoryInput.style.height = "51px";
        categoryInput.style.marginBottom = "10px";

 const defaultOption = document.createElement("option");
        defaultOption.value = "";  // Valeur vide pour l'option par défaut
        defaultOption.innerText = "";
        defaultOption.disabled = true;  // Désactive cette option
        defaultOption.selected = true;  // Sélectionne par défaut cette option
categoryInput.appendChild(defaultOption);  // Ajout de l'option par défaut dans le select

const labelCategory = document.createElement("label");
        labelCategory.innerText = "Catégorie";
        labelCategory.setAttribute("for","category");
        labelCategory.style.display = "flex";
        labelCategory.style.justifyContent = "flex-start";
        labelCategory.style.width = "100%";
        labelCategory.style.marginBottom = "10px";
        
 console.log("Select catégorie créé");

     // Ajouter le nouveau bouton "Valider" de type submit
const submitBtn = document.createElement("button");
     submitBtn.setAttribute("type", "submit");
     submitBtn.setAttribute("form", "modalForm"); 
     submitBtn.innerText = "Valider";
     submitBtn.style.display = "flex";
     submitBtn.style.justifyContent = "space-around";
     submitBtn.style.border = "none";
     submitBtn.style.fontFamily = "Syne";
     submitBtn.style.fontWeight = "300";
     submitBtn.style.color = "white";
     submitBtn.style.backgroundColor = "#1D6154"
     submitBtn.style.margin = "2em auto";
     submitBtn.style.padding = "8px";
     submitBtn.style.width = "250px";
     submitBtn.style.textAlign = "center";
     submitBtn.style.borderRadius = "60px";
     


        modalForm.appendChild(fileInputWrapper);                            // fileInput est rajouté à modalForm
        modalForm.appendChild(labelTitle);
        modalForm.appendChild(titleInput);                                  // titleInput est rajouté à modalForm    
        modalForm.appendChild(labelCategory);
        modalForm.appendChild(categoryInput);                               // categoryInput est rajouté à modalForm

        fetchCategory(categoryInput);
        
const modalContainer = document.querySelector(".modalContainer");
    const modal = document.querySelector(".modal");
    modal.style.paddingBottom = "10px"

        modalContainer.appendChild(submitBtn);                              // Ajout du bouton Valider au formulaire
        modalContent.appendChild(modalForm);                                // modalForm est rajouté à modalContent

console.log("Formulaire ajouté à la modale");
     
modalForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    console.log("Soumission du formulaire...");

        // Retirer les anciens messages d'erreur
        const existingErrors = document.querySelectorAll(".error-message");
        existingErrors.forEach(error => error.remove());

    const title = titleInput.value;
    const  categoryId = parseInt(categoryInput.value, 10);
    const imageFile = fileInput.files[0];

    let hasError = false; // Flag pour vérifier s'il y a une erreur
    console.log("Données du formulaire :", { title, categoryId, imageFile });

    // Vérification du titre
    if (!title) {
        const errorMessage = createErrorMessage("Le titre est requis.");
        titleInput.parentElement.appendChild(errorMessage);
        hasError = true;
    }

    // Vérification de la catégorie
    if (!categoryId) {
        const errorMessage = createErrorMessage("Veuillez sélectionner une catégorie.");
        categoryInput.parentElement.appendChild(errorMessage);
        hasError = true;
    }

    // Vérification de l'image
    if (!imageFile) {

        const existingErrors = fileInputWrapper.querySelectorAll(".error-message");      // Supprimer les anciens messages d'erreur liés à l'image
        existingErrors.forEach(error => error.remove());

        const errorMessage = createErrorMessage("Une image est requise.");
        fileInputWrapper.appendChild(errorMessage);
        fileInput.value = "";                                                            // Réinitialise le champ de fichier pour permettre une nouvelle sélection
        hasError = true;
    } else {
        const maxSize = 4 * 1024 * 1024;
        if (imageFile.size > maxSize) {
            const errorMessage = createErrorMessage("La taille de l'image ne doit pas dépasser 4 Mo.");
            fileInputWrapper.appendChild(errorMessage);
            hasError = true;
        }
    }

    // Si des erreurs existent, on arrête l'envoi
    if (hasError) {
        return; // Le formulaire ne sera pas envoyé
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);
    formData.append("category", categoryId);
    console.log("FormData créé avec succès");

    try {
        console.log("Envoi du formulaire...");
        const res = await fetch("http://localhost:5678/api/works",{
             method: "POST",
             headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
             },
             body: formData
                
               });

               if (res.ok){
                const data = await res.json();
                console.log("Image ajoutés avec succès:", data);
                
                window.gallery.push(data);

                titleInput.value = "";
                categoryInput.value = "";
                fileInput.value = "";
                imagePreview.style.display = "none";

                 // Fermer la modal après l'ajout
                closeModal();
                const divGallery = document.querySelector(".gallery"); 
                divGallery.innerText = "";
                generergallery(window.gallery)

                // Afficher un message de succès
            showSuccessMessage("Le formulaire a été envoyé avec succès!");

             } else {   
                const errorData = await res.json();
                console.error ("Erreur lors de l'envoie de l'image:", res.statusText, errorData);
                return;
                
               } 
               
    }catch (error){
        console.error("Erreur lors de l'envoie:", error);
    }
});

     


}

export { modalAddForm };