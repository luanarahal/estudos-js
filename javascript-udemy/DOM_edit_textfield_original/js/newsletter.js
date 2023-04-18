const txtEmail = document.getElementById("txtEmail")

function editarEmail() {
    txtEmail.disabled = false
    txtEmail.focus() //para dar foco quando habilitar o campo para edição
}

function disabledEmail() {
    txtEmail.disabled = true
}

