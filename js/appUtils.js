/***
 * Salva todo o conteudo da lista no localStorage
 */

const saveToDoOnLocalStorage = () => {

    const separator = "|"
    const listOfLiElements = document.querySelectorAll("ul li div span")
    const listOfTexts = []
    listOfLiElements.forEach((item) => {
        listOfTexts.push(item.innerHTML)
    })

    localStorage.setItem("listOfTexts", listOfTexts.join(separator))
}