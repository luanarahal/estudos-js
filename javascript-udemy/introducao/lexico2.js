//TIPAGEM DINÂMICA

let x = 10
x = "uma string"
console.log(x)

let msg = "uma \"string\""
console.log(msg)

console.log("ola" * 2)
console.log("2" * 2) //irá converter o "2" para número para fazer a conta, mas é errado deixar dessa forma; sempre converter para números

function teste() {
    console.log(this)
}
const teste2 = () => {
    console.log('teste2')
    console.log(this)
}
teste()

const obj = {
    n: 0,
    teste,
    teste2
}
obj.teste2()