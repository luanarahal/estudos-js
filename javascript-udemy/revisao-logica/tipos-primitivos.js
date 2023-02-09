// strings, number (int, floats), boolean
// undefined, null, symbol (ES6 - EC2015)

let minhaVar = "minha string"
let minhaVar2 = 'minha "string" com aspas duplas' // quando quiser colocar "" dentro de um variável, usar aspas simples
var minhaVar3 = `minha template literal`
console.log(minhaVar2)
console.log(minhaVar3)

let idade = 40
// let msg = "eu possuo " + idade + " anos"; -> modo antigo
let msg = `eu possuo ${idade} anos` // modo atualizado
console.log(msg)
console.log(typeof msg, typeof idade, typeof minhaVar, "--", 20) // verificando o tipo de uma variável

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`)

const isValid = true;
console.log(`isValid: ${isValid}`)

let varTeste;
console.log(varTeste)
console.log(typeof varTeste)
varTeste = 10;
console.log(varTeste, typeof varTeste)

let varTeste2 = null // para ser null, precisa declarar como null, e o typeof será OBJECT
console.log(varTeste2)
console.log(typeof varTeste2)
varTeste2 = 10;
console.log(varTeste2, typeof varTeste2)