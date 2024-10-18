function modalAddForm () {

    const mondalTitle = document.querySelector(".modalTitle");
        mondalTitle.innerText = "Ajout photo";

    const btnAdd = document.querySelector(".btnAdd");
        btnAdd.style.display = "none";
        // btnAdd.innerText = "Valider";
        // btnAdd.setAttribute("type", "submit");
        // console.log("Bouton Valider créé et mis à jour");

    const closeModalBack = document.querySelector(".closeModalBack")
        closeModalBack.style.display = "block"
        console.log("Bouton retour affiché");

    const modalContent = document.querySelector(".modalContent");
        modalContent.innerHTML = "";
        console.log("Contenu de la modale vidé");
       

    const modalForm = document.createElement("form");                       // On crée un formulaire
        modalForm.classList.add("modalForm");


  const fileInput = document.createElement("input");                     // On crée un input d'envoie de fichier
    fileInput.setAttribute("type", "file") ;
    fileInput.setAttribute("accept", "image/png, image.jpeg");
    fileInput.setAttribute("required", "true");
    console.log("Input fichier créé");

  const titleInput = document.createElement("input");                     // On crée un input 
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "titre");
        titleInput.setAttribute("required", "true");                        // Rendre le champ requis
        console.log("Input titre créé");

  const categoryInput = document.createElement("select");                 // On crée un select
        categoryInput.setAttribute("id", "category");
        categoryInput.setAttribute("required", "true");                     // Rendre le champ requis
 console.log("Select catégorie créé");

     // Ajouter le nouveau bouton "Valider" de type submit
     const submitBtn = document.createElement("button");
     submitBtn.setAttribute("type", "submit");
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
     


        modalForm.appendChild(fileInput);                                   // fileInput est rajouté à modalForm
        modalForm.appendChild(titleInput);                                  // titleInput est rajouté à modalForm    
        modalForm.appendChild(categoryInput);                               // categoryInput est rajouté à modalForm
        const modalContainer = document.querySelector(".modalContainer");
        modalContainer.appendChild(submitBtn);                                   // Ajout du bouton Valider au formulaire
        modalContent.appendChild(modalForm);                                // modalForm est rajouté à modalContent

console.log("Formulaire ajouté à la modale");
        
modalForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    console.log("Soumission du formulaire...");

    const title = titleInput.value;
    const  categoryId = parseInt(categoryInput.value, 10);
    const imageFile = fileInput.files[0];

    console.log("Données du formulaire :", { title, categoryId, imageFile });
if (!title || !categoryId || !imageFile) {
        alert("Tous les champs doivent être remplis !");
        return;
    }
    console.log("Titre:", title);
    console.log("Catégorie ID:", categoryId);
    console.log("Fichier image:", imageFile);

    const maxSize = 4 * 1024 * 1024;
    if (imageFile.size > maxSize){
        alert ("La taille de l'image ne doit pas dépasser 4 Mo.");
        return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);
    formData.append("categoryId", categoryId.toString());
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
                
                titleInput.value = "";
                categoryInput.value = "";
                fileInput.value = "";
               } else {   
                const errorData = await res.json();
                console.error ("Erreur lors de l'envoie de l'image:", res.statusText, errorData);
                return;
                
               } 
               
    }catch (error){
        console.error("Erreur lors de l'envoie:", error);
    }
});

 async function fetchCategory(){
    console.log("Récupération des catégories depuis l'API");
    try {
        const rep = await fetch("http://localhost:5678/api/categories");
        if (!rep.ok) {
            throw new Error("Erreur lors de la récupération des catégories"); 
        } 
        const categories = await rep.json();
        console.log("Catégories récupérées:", categories);
       
        categories.forEach((category) => {                                     // On fait une boucle pour récupérer les categorie
            const option = document.createElement("option");               // On crée une option
            option.value = category.id;                                    // La valeur sera id de catégorie
            option.textContent = category.name;                            // Le texte sera le name de catégorie
            categoryInput.appendChild(option);                             // On ajout option a categoryInput            
        });
    } catch (error){
        console.error("Erreur lors de la récupération des catégories:", error);
    }
 }       
fetchCategory();

}

export { modalAddForm };