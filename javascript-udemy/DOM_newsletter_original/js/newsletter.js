const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")

function cadastrarEmail() {
    let email = txtEmail.value //captando o que está escrito no label
    msgFeedback.innerHTML = `O e-mail ${email} foi cadastrado com sucesso!`
}