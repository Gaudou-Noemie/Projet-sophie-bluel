function modalAddForm () {

    const mondalTitle = document.querySelector(".modalTitle");
        mondalTitle.innerText = "Ajout photo";

    const btnAdd = document.querySelector(".btnAdd");
        btnAdd.innerText = "Valider";


    const modalForm = document.createElement("form");                       // On crée un formulaire
        modalForm.classList.add("modalForm");

    const titleInput = document.createElement("input");                     // On crée un input 
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "titre");
        titleInput.setAttribute("required", "true");                        // Rendre le champ requis
    

    

    const categoryInput = document.createElement("select");
        categoryInput.setAttribute("id", "category");
        categoryInput.setAttribute("required", "true");                     // Rendre le champ requis

modalForm.appendChild(titleInput);                                          // titleInput devient l'enfant de modalForm    
modalForm.appendChild(categoryInput);                                       // categoryInput devient l'enfant de modalForm


}

export { modalAddForm };