let arr = ["a"]
console.log(arr)

function alteraArray(a) {
    a.push("adicionado")
}

alteraArray(arr)
console.log(arr)



let msg = "mensagem"
console.log(msg)

function alteraPrimitivo(p) {
    p += " adicionado"
    console.log(" dentro da função: " + p)
}

alteraPrimitivo(msg)
console.log(msg)