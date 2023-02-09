let quadroFuncionarios = [["Financeiro", "Luana", "Natalia"], ["RH", "Naiara", "Thais"], ["Tecnologia", "Adriano", "Antonio"]]
console.log(quadroFuncionarios)

//fazendo uma lista com todas as informações do loop aninhado
quadroFuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indiceFunc) => {
        console.log(funcionario)
    })
})

//fazendo uma lista de cada array dentro do loop aninhado, mostrando o índice com +1, irá ficar assim:
// 1- Financeiro
// 2- Luana
// 3- Natalia
// 1- RH
// 2- Naiara
// 3- Thais
// 1- Tecnologia
// 2- Adriano
// 3- Antonio
quadroFuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indiceDep) => {
        console.log(`${indiceDep + 1} - ${funcionario}`)
    })
})