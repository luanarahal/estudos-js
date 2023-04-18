let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]

//TO STRING: transforma todos os elementos de um array numa grande string
console.log(arr1.toString())
console.log(typeof arr1.toString())

//JOIN: transforma todos os elemento de um array numa grande string, MAS tem a opção de separar pelo o que você quiser
console.log(arr1.join(" - ")) //ex: separando os elementos por hífen

//CONCAT: concatena um objeto a outro
let arr3 = arr1.concat(arr2, 8, 9, 10, ["ola", "mundo"]) //concatenando arr1 com arr2 e adicionando os números 8, 9, 10, ola, mundo
console.log(arr1)
console.log(arr2)
console.log(arr3)