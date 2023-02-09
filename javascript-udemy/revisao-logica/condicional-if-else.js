let idade = 18
let paisPresentes = false
let comprouBilhete = false
const podeViajar1 = idade >= 18 || paisPresentes // criando uma variável para verificar se a idade é maior q 18 ou se os pais estão presentes, como nas linhas acima, a idade é 18, e o operador é de || (OR), a resposta será true
const podeViajar2 = idade >= 18 || (paisPresentes && comprouBilhete) /* criando uma variável para verificar se a idade é maior q 18 ou se os pais estão presentes E se comprou o bilhete, IRÁ DAR ERRO: porque o código irá ler desta forma:
(paisPresentes && comprouBilhete) = false
idade >= 18 = true
true OR false 
= true */
const podeViajar3 = (idade >= 18 || paisPresentes) && comprouBilhete // agora irá executar primeiro o OR e depois do AND, e irá dar certo, a resposta será false.
console.log(`Pode viajar?: ${podeViajar1}`)
console.log(`Pode viajar?: ${podeViajar2}`)
console.log(`Pode viajar?: ${podeViajar3}`)

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if (comprouBilhete) {
    console.log("Não comprou o bilhete")
} else {
    if (idade >= 18) {
        console.log(msgMaiorIdade)
    }
    else {
        console.log("Opa! É menor de idade.")
    }
}

let n1 = 6
let n2 = 8
let media = (n1 + n2) / 2
console.log(`Média: ${media}`)
console.log((3 * 2) ** 2)

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Reprovado, mas há como recuperar!")
} else {
    console.log("Aprovado!!!")
}