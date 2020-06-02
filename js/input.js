(() => {
    
    const form = document.querySelector(".input-form")
    const app = document.querySelector(".app")

    /***
    *Trata os dados do input e inicia o evento "addToListEvent" para o módulo TODO adicionar o item na lista
    */
    const submitForm = (event) => {
        event.preventDefault()

        const todoText = new String(form["input-task"].value).trim()

        const spanErrorMessage = document.querySelector(".input-task-error")
        
        //Verifica se o input é nulo ou possui "|". Se for/tiver, a mensagem de erro aparece
        if (todoText === "" || todoText.includes("|")) {
            spanErrorMessage.classList.remove("hidden")        
            return
        }

        spanErrorMessage.classList.add("hidden")   

        //Clear dos inputs para os próximos itens
        form["input-task"].value = ""

        const addToListEvent = new CustomEvent("addToListEvent", {
            detail: todoText
        })
        
        //Inicia o evento para o módulo TODO adicionar o item na lista
        app.dispatchEvent(addToListEvent)
    }


    form.onsubmit = submitForm
    
})()