//array1
const num1 = [1, 4, 9, 16]

//mapeia um array de origem e gera um novo array em cima deste -- multiplicando os valores * 2 do array acima
const novosNumeros = num1.map((num1) => num1 *2) 
console.log(novosNumeros)

//verificando os números que são ímpares do array acima
const impares = num1.filter((num1) => num1 % 2 === 1)
console.log(impares) //retornará os números e suas posições dos números ímpares 

//array2
const num2 = [10, 20, 30, 40, 50]

//adicionando +10 aos elementos do array acima
const novosNum = num2.map((num2) => num2 + 10)
console.log(novosNum)

//verificando os números que são maiores que 25 do array acima
const maior25 = num2.filter((num2) => num2 > 25)
console.log(maior25)

//array3
const num3 = [10, 15, 25, 55, 40]

//obtendo o valor do --primeiro elemento-- no array acima que satisfaz a condição desejada -- valor maior que 25
let numeroRetornado = num3.find((num3) => num3 > 25)
console.log(numeroRetornado) //55

//obtendo o índice do --primeiro elemento-- no array acima que satisfaz a condição desejada -- valor maior que 25
let indiceRetornado = num3.findIndex((num3) => num3 > 25)
console.log(indiceRetornado) //3

//array4
const num4 = [-7, -10, -3, 0, 4, 5, 100]

//obtendo o valor do --primeiro elemento-- no array acima que satisfaz a condição desejada -- valor maior que 0
let numeroRetornado2 = num4.find((num4) => num4 > 0)
console.log(numeroRetornado2)

//obtendo o índice do --primeiro elemento-- no array acima que satisfaz a condição desejada -- valor maior que 0
let indiceRetornado2 = num4.findIndex((num4) => num4 > 0)
console.log(indiceRetornado2)