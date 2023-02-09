let n1 = 10;

let n2 = "2.580438590";
n2 = parseInt(n2); // para converter a string em número inteiro
//n2 = parseFloat(n2); // para converter a string em número quebrado

console.log(n1*n2 , typeof n1, typeof n2) // js transforma o n2 em número para apresentar a multiplicação
console.log(n1 + n2) // irá concatenar n1 + n2, transforma o n1 em string
console.log(n1 - n2) // js transforma o n2 em número

// parseInt, parseFloat, Number()

let n3 = '14ascjasisj' // se iniciar com letra e depois ter o número, irá dar NaN
n3 = parseFloat(n3) // irá transformar o número em inteiro, se a variável iniciar com número 
console.log(n3, typeof n3)

let n4 = "14a" 
n4 = Number(n4); // se tentar converter um número para Number e que tenha letra depois, será NaN, só funciona com parseInt e parseFloat para transformar em nº inteiro
console.log(n4);

let n5 = 10
//n5 = n5 + "" -> muda para string -> pior jeito
n5 = n5.toString(); // -> melhor jeito
console.log(n5, typeof n5)

// decimais 0 - 9
// hexadecimais 0 - f (15)