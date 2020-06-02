(() => {

    const app = document.querySelector(".app")

    
    window.onload = () => {
        app.dispatchEvent(new CustomEvent("windowLoaded"))
    }

})()


