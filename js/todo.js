(() => {

    //Inicialização dos elementos do módulo
    const todoList = document.querySelector(".todo .todo-list")
    const app = document.querySelector(".app")

    //Cria um <li> com o texto e um botão para remover 
    const createLiElement = (text) => {

        const spanElement = document.createElement("span")
        const buttonElement = document.createElement("button")
        const liElement = document.createElement("li")
        const spanDivElement = document.createElement("div")
        const buttonDivElement = document.createElement("div")


        //Adição das classes necessárias
        buttonElement.className = "todo-list-button-remove"
        spanDivElement.className = "todo-list-span-div"
        buttonDivElement.className = "todo-list-button-remove-div"

        //Inserção dos textos HTML
        spanElement.innerHTML = text
        buttonElement.innerHTML = "Remover"

        //Função que remove o <li> criado
        buttonElement.onclick = (event) => {
            event.preventDefault()
            liElement.parentNode.removeChild(liElement)
        }

        spanDivElement.appendChild(spanElement)
        buttonDivElement.appendChild(buttonElement)

        liElement.appendChild(spanDivElement)
        liElement.appendChild(buttonDivElement)

        return liElement        
    };

    //Adiciona um <li> a todo list 
    const addToDo = (event) => {
        const inputText = event.detail
        todoList.appendChild(createLiElement(inputText))
    }

    //Listener que ouve o evento de adicionar uma nova tarefa a lista oriundo do módule input.js
    app.addEventListener("addToListEvent", addToDo)
})()