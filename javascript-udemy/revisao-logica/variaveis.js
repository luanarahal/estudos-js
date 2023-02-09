// podemos criar variáveis com: var, let, const

// var -> ES5 - cross-browser
// let e const -> ES2015

// var pode declarar mais de uma vez na mesma variável, let dá erro. 
// exemplo:
// var teste = "minha string"
// var teste = 10
// não daria erro, e o valor que apareceria 10

let teste = "minha string"
//let teste = 10 se colocasse essa linha, daria erro, pois não permite. É MAIS SEGURO.
console.log(teste)

const teste2 = 10;
//teste2 = 11; se colocasse era linha, daria erro, porque não é possível declarar uma variável numa constante
console.log(teste2)

let teste3
teste3 = 20
console.log(teste3)
// com let, você pode primeiro declarar a variável e depois atribuir um valor à ela, com const isso não é possível