let arr = [4, 5, 10, 20, 35, 4, 5]

//sempre retornará o índice do número que você procura
console.log(arr.indexOf(5))          //retonará o índice (posição) 1 (pois pega o primeiro 5)
console.log(arr.lastIndexOf(5))      //retornará o índice (posição) 6 (pois pega o último 5)
//quando não encontra o elemento solicitado, retorna -1 - tipo "falso", não existe o nº na array

//INCLUDES: retorna se achar o elemento procurado na array - true ou false
console.log(arr.includes(5)) 

//FIND: encontra o primeiro elemento que satisfaça a condição
//se não encontrar nada, retorna undefined
console.log(arr.find(function(el){
    return el > 10
}))

//FINDINDEX: encontra o índice do primeiro elemento encontrado que satisfaça a condição
//se não encontrar nada, retorna -1
console.log(arr.findIndex(function(el){
    return el > 10
}))
