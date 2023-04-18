const frutas = ["Melancia", "Banana", "Morango", "Uva"]

//mostrando os elementos do array - for tradicional
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//mostrando os elementos do array - for in - pode ser mais lento
for (let indice in frutas) {
    console.log(frutas[indice])
}

//mostrando os elementos do array - for of - não dá acesso ao número do elemento atual - melhor desempenho, pode ter um break
for(let fruta of frutas) {
    console.log(fruta)
}

//mostrando os elementos do array - forEach() - mostra o valor e o índice
frutas.forEach((fruta, indice) => {
    console.log(fruta)
    console.log("Fruta" + indice + ": " + fruta)
}) 