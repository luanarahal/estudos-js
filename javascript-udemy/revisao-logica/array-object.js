const nomes = ["Luana", "Adriano", ""]
const pessoa = {nome: "Sol", idade: 9, email: ""}
const pessoa1 = {}

const pessoas = [
    {
        nome: "Bruce",
        idade: 10
    },
    {
        nome: "Snoopy",
        idade: 9
    },
    {
        nome: "Ana Clara",
        idade: 1
    }
]

console.log(pessoas)
console.log(pessoas[2].nome) //para ver só o nome na posição 2

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}