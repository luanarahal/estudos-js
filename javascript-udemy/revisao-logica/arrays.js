const arr = new Array()
console.log(arr)
const arr2 = new Array(true, "Luana", 26, new Array(2, 4, 10))
console.log(arr2)
console.log(arr2[1])
console.log(arr2[3][1]) //mostrando o valor do array dentro do outro array
console.log(arr2[3][arr2[3].length -1])

const arr3 = ["Adriano", 26, [2, 5, 8], true]
arr3[4] = "a"
arr3[arr3.length] = "b"
arr3.push("push")
arr3.push("a", "b", "c")

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])
let n = 6
console.log(arr3[n])