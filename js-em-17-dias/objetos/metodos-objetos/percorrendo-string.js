//PERCORRENDO STRING POR FOR TRADICIONAL
function meuIndexOf(palavra, letra) {
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            return i
        }
    }
    return -1
}

function meuIncludes(palavra, letra) {
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            return true
        }
    }
    return false
}

//PERCORRENDO STRING POR FOR IN
function meuIndexOf(palavra, letra) {
    for (let indice in palavra) {
        if(palavra[indice] === letra) {
            return indice
        }
    }
    return -1
}

function meuIndexOf(palavra, letra) {
    for (let indice in palavra) {
        if(palavra[indice] === letra) {
            return true
        }
    }
    return false
}

//PERCORRENDO STRING POR FOR OF -- não conseguimos retornar um índice, somente conseguimos fazer o includes, mas é mais rápido
function meuIncludes(palavra, letra) {
    for (let letraAtual of palavra) {
        if(letraAtual === letra) {
            return true
        }
    }
    return false
}


