function somaTresNumeros(num1 = 2, num2 = 5, num3 = 9) {
    return num1 + num2 + num3
}
//caso não tenha valor definido para as variáveis, será estabelecido o valores acima num1 = 2, num2 = 5, num3 = 9

console.log(somaTresNumeros())             //16
//estabelecerá 2, 5, 9
console.log(somaTresNumeros(10))           //24
//estabelecerá 10, 5, 9
console.log(somaTresNumeros(10, 8))        //27
//estabelecerá 10, 8, 9
console.log(somaTresNumeros(10, 5, 6))     //21
//estabelecerá 10, 5, 6