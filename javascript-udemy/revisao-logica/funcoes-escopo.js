let n = "global"

function mostraN() {
    let n1 = " n1 local"
    
    if(true) {
        var n2 = "n2 dentro de if com var"
    }
    console.log("valor de n1 no escopo local:" + n1)
    console.log("valor de n2: " + n2)
}
mostraN()

console.log("valor de n no escopo global: " + n)

function fnExt() {
    let n = "n local na função fnExt"

    function fnInt() {
        let n = "n local na função fnInt" //criando uma let interna
        console.log(n)
    }
    fnInt()
    console.log(n)
}

fnExt()