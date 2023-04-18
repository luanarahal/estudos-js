const media = function calcularMedia(num1, num2, num3) {
    let mediaNum = (num1 + num2 + num3)/3
    return mediaNum
}

console.log(media(7, 8, 9))
console.log(media(10, 20, 30))
//neste caso de expressão, não podemos chamar a função antes dela ter sido declarada.