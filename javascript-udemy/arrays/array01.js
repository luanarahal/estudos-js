const arr = [1, 5, 10, "ola", true]


/// EVERY E SOME - QUANDO QUERO FAZER UMA VERIFICAÇÃO DOS ELEMENTOS DO ARRAY

//EVERY: todos os elementos do array passam por um teste implementado por uma função fornecida, retornar boolean
let soNumeros = arr.every(function(el) {           //esse el quer dizer que irá passar por todos os ELEMENTOS da array
    //console.log(el)                              //pedindo para mostrar cada elemento
    return typeof el === "number" && el > 20
})

//console.log(soNumeros)

//SOME: se tiver pelo menos 1 elemento do array que atende a função, ele retorna true
let soNumeros2 = arr.some(function(el) {           //esse el quer dizer que irá passar por todos os ELEMENTOS da array
    console.log(el)                                //pedindo para mostrar cada elemento
    return typeof el === "number"                  //&& el > 20 --- isso daria false porque não tem NENHUM NÚMERO MAIOR QUE 20
})

//console.log(soNumeros2)

//FILTER: utilizar para filtrar um array
let arr1 = arr.filter(function(el, i, _arr){       //precisa declarar a variável para pegar os elementos que correspondem 
    //console.log(el)                              //mostrando quais elementos ele está verificando
    //console.log(i)                               //mostrando qual indice ele está verificando
    //console.log(_arr)                            //mostrando a array
    return typeof el === "number"
})

//console.log(arr)                                 //array original - ele não é alterado
//console.log(arr1)                                //array com o filtro

//FOR EACH: para fazer interação dentro do array
arr.forEach(function(el, i, _arr){                //para forEach não precisa declarar variável
    //console.log(i, ": ", el)
})

//console.log(arr)

//MAP: 

let arr2 = arr1.map(function(el, i, _arr){            //precisa declarar variável, pois irá alterar o array
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)