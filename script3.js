let count = 0

clickButton = document.querySelector("#counter")

clickButton.addEventListener("click", () => {
    /*À chaque clic, incrémente la variable count.
    Puis modifie le texte à l’intérieur du bouton avec la nouvelle valeur de count*/
    count += 1
    clickButton.innerText = `${count} clics`
})