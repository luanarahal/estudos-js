teste() //roda porque function iça uma função mesmo que esteja embaixo

function teste() {
    console.log("teste")
}

teste2() //não rodará porque teste2 está dentro de uma const

const teste2 = function teste2() {
    console.log("teste2")
    }