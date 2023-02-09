// OPERADORES ARITMÉTICOS

// + soma
// - subtração
// * multiplicação
// / divisão
// % resto da divisão
// ** potência

let n1 = 10
let n2 = 5
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(n1 ** n2)

// OPERADORES DE ATRIBUIÇÃO
// quando irá fazer uma operação gerando um valor e já atribuindo na variável
let n3 = 20 // sinal de = é um operador de atribuição
// n3 = n3 + 15; -> forma antiga é o mesmo que:
n3 += 15;
// n3 -= 15;
// n3 *= 15;
// n3 %= 2;
// n3 **= 2;
console.log(n3);

// INCREMENTO E DECREMENTO
let n4 = 0
n4++ // é igual a: i = i + 1 OU i += 1
console.log(n4)

let n5 = 0
console.log(n5++) // aparecerá 0 porque ainda irá atribuir a soma de 1
console.log(n5) // aparecerá 1 

let n6 = 0
console.log(++n6) // aparecerá 1 porque já atribuiu a soma de 1 (++ está antes da variável)
console.log(n6) // aparecerá 1

// OPEERADORES DE COMPARAÇÃO
/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valores e tipos diferentes
*/

console.log(n1, n2, n3, n4, n5, n6)

console.log(n1 == "10") //comparando valor de n1 com 10, resultado: true
console.log(n1 === "10") //comparando valor e tipo de n1 com 10, resultado: false - n1 é number e 10 está como string

console.log(n2 < 10) 
console.log(n2 > 10)

// OPERADORES LÓGICOS
/* 
AND &&
OR ||
NOT !
*/

/* Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU
- estar acompanhado com os pais 
E
- ter comprado bilhete */

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