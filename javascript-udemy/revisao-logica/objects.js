/*const nomes = ["Luana", "Adriano", "Sol", "Bruce"]
const idades = ["26", "26", "8", "9"]
console.log(nomes[0], idades[0])*/

const pessoa = {
    nome: "Luana",
    idade: "26"
}

//const pessoa = new Object()
pessoa.nome = "Luana"
pessoa.idade = 26
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

let prop = "nome"
console.log(pessoa[prop])
console.log(pessoa.idade) // ou console.log(pessoa["idade"])