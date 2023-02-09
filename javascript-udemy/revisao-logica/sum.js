function sum(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error("Digite apenas números!!!")
    }
    return n1 + n2
}
//sum("a")

let soma = ""
    try {
        soma = sum(3, 3)
    } catch(e) {
        console.log("Ocorreu um erro")
        console.log(e.message)
    } finally {
        console.log("Bloco Finally")
    }
    console.log(soma)
    console.log("Fim do programa")