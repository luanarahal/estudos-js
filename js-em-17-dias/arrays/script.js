const frutas = []

frutas[0] = "Morango"
frutas[1] = "Banana"
frutas[2] = "Maçã"
frutas[3] = "Kiwi"
frutas[4] = "Laranja"

console.log(frutas)

//alterando alguns elementos
//frutas[0] = "Uva"
//frutas[1] = "Pêra"

//console.log(frutas.length) //para ver quantos elementos tem
//frutas.sort() //para colocar em ordem alfabética
//frutas.reverse() //para inverter a ordem do array

//frutas.push("Melancia") //para adicionar um elemento no final do array
//frutas.unshift("Melão") //para adicionar um elemento no início do array
//frutas.pop() //para remover o último elemento do array
//frutas.shift() //para remover o primeiro elemento do array
//frutas.splice(3, 2) //remove um intervalo de elementos do array - 3 (primeira posição): significa a posição q vc quer remover. 2 (segunda posição): significa a quantidade de elementos q deseja remover.
let buscaKiwi = frutas.indexOf("Kiwi")
let buscaLaranja = frutas.indexOf("Laranja")
console.log(buscaKiwi)              //3
console.log(buscaLaranja)           //4
console.log(frutas[buscaKiwi])      //Kiwi
console.log(frutas[buscaLaranja])   //Laranja