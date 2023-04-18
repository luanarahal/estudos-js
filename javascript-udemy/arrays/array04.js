let arr1 = ["a", "b", "c"]
let arr2 = arr1 //aqui está apontando que arr1 é igual a arr2, mas elas estão dentro da mesma memória, se alterar uma, altera a outra

arr2[arr2.length] = "novo valor"

console.log(arr1)
console.log(arr2)
//ambas as variáveis aponta pro mesmo objeto

//para isso não acontecer, opção fazer com concat

let arr3 = [].concat(arr1)

arr3[arr1.length] = "novo valor 2"
console.log(arr1) //não irá alterar a arr1
console.log(arr3) 

//existem maneiras melhores