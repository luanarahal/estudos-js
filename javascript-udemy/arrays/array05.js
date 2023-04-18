let arr = [1,3,5,7,9]

let teste = arr.push(10, 11, "ola mundo", "oi")
console.log(arr)              //adicionou os elementos 
console.log(teste)            //conta quantos elementos tem na array

let ultimoitem = arr.pop()
console.log(ultimoitem)       //mostra o último item da array
console.log(arr)              //exclui o último item da array original, se não quiser excluir, pode fazer: let ultimoitem = arr[arr.length - 1]