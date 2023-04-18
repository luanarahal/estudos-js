(function () {
    const nomeUsuario = "Daniel"

    if(nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Olá, <b>${nomeUsuario}</b></p>`

        //elementoPai.insertBefore(novoElemento, elementoReferencia)

        const ElementoPai = document.querySelector(".hero")
        ElementoPai.insertBefore(topBarElemento, ElementoPai.firstElementChild)
        //console.log(ElementoPai.querySelector(".hero-content"))
        //para ficar melhor
        console.log(ElementoPai.firstElementChild) //se não tivesse a div comentada no html, poderia utilizar apenas firstChild
    }
    

})()
