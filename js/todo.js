(() => {

    //Inicialização dos elementos do módulo
    const todoList = document.querySelector(".todo .todo-list")
    const app = document.querySelector(".app")

    //Cria um <li> com o texto e um botão para remover 
    const createLiElement = (text) => {

        const spanElement = document.createElement("span")
        const buttonElement = document.createElement("button")
        const liElement = document.createElement("li")
        
        buttonElement.className = "todo-list-button-remove"

        spanElement.innerHTML = text
        buttonElement.innerHTML = "Remover"

        //Remove o <li> criado
        buttonElement.onclick = (event) => {
            event.preventDefault()
            liElement.parentNode.removeChild(liElement)
        }

        liElement.appendChild(spanElement)
        liElement.appendChild(buttonElement)

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