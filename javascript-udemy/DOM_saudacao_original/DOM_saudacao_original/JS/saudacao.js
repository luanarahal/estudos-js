(function () {
    const nomeUsuario = "Daniel"

    //pegando o label do html e alterando para Daniel
    //document.querySelector(".top-bar p").textContent = "Bem vindo(a), " + nomeUsuario 

    //colocando apenas o nome do usuário na frente, e admitindo que já tem "Bem vindo" no label
    //document.querySelector(".top-bar p").textContent += nomeUsuario //concatenei o que já estava escrito no label, com o nome Daniel
    document.querySelector(".top-bar p").innerHTML += "<b>" + nomeUsuario + "</b>" //deixando o nome em negrito, precisa ser innerHTML

    //outra opção para pegar o label do html e alterar para Daniel
    //const elemento = document.querySelector(".top-bar p")
    //elemento.textContent = "Bem vindo(a) + " + nomeUsuario
    //e concatenando
    //elemento.textContent += nomeUsuario

    //escondendo label se o cliente não tiver logado ainda
    /*
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if (nomeUsuario) {
        document.querySelector(".top-bar p").textContent += nomeUsuario
        console.log(elemento.textContent)
    } else {
        elemento.style.display = "none" //pode utilizar elemento.remove() mas não irá funcionar no Internet Explorer
        //posso utlizar para acessar o elemento pai, desta forma: elemento.parentElement.style.display = "none"
    }
    console.log(elemento)
    */
})()