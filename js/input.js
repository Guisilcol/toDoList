(() => {
    
    const form = document.querySelector(".input-form")
    const app = document.querySelector(".app")


    form.onsubmit = (event) => {
        event.preventDefault()

        const todoText = new String(form["input-task"].value).trim()

        const spanErrorMessage = document.querySelector(".input-task-error")
        
        //Verifica se o input é nulo. Se for, a mensagem de erro aparece
        if (todoText === "") {
            spanErrorMessage.classList.remove("hidden")        
            return
        }

        spanErrorMessage.classList.add("hidden")   

        //Clear dos inputs para os próximos itens
        form["input-task"].value = ""

        const addToListEvent = new CustomEvent("addToListEvent", {
            detail: todoText
        })
        
        app.dispatchEvent(addToListEvent)
} 
})()