/* Sistema de cadastro de clientes */

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente) {
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente;
    taxaDeJuros = defineTaxa(idadeCliente);
    avalistas = avalistasCliente
}

function defineTaxa(idadeCliente) {
    if(idade >= 18 && idade <= 25) {
        return 0.09;
    } else if (idade >= 25 && idade <= 35) {
        return 0.08;
    } else if(idade >= 36 && idade <= 50) {
        return 0.07;
    } else {
        return 0.06;
    }
}

cadastraCliente("Luana", "Luz", 26, 300000, 2, true)
console.log(nome)
console.log(sobrenome)
console.log(taxaDeJuros)

cadastraCliente("Adriano", "Prates", 49, 150000, 9, false)
console.log(nome)
console.log(sobrenome)
console.log(taxaDeJuros)

cadastraCliente("Marco", "Luz", 60, 150000)
console.log(nome)
console.log(sobrenome)
console.log(taxaDeJuros)
console.log(numAnos)
console.log(ehBomPagador)

cadastraCliente("Natalia", "Rahal", 45, 450000, 2, true, ["Manuel", "Rafael", "Bruno"])
console.log(nome)
console.log(sobrenome)
console.log(avalistas)
console.log(avalistas[0])
console.log(avalistas[1])
console.log(avalistas[2])

function adicionaAvalista(avalista) {
    avalistas.push(avalista)
}

function removeAvalista() {
    avalistas.pop()
}

function editaAvalista(nomeAvalista, indice) {
    avalistas[indice] = nomeAvalista;
}

function ordenaAvalista() {
    return avalistas.sort()
}

function exibeAvalistas() {
    avalistas.forEach((avalista, indice) => {
        console.log(`O ${indice + 1}º avalista é ${avalista}`)
    })
}

//adicionando no array
adicionaAvalista("Andrew")
adicionaAvalista("José")
adicionaAvalista("Marcos")

//mostrando o array
console.log(avalistas)

//removendo os dois últimos analistas
removeAvalista()
removeAvalista()

//mostrando o array
console.log(avalistas)

//editando o analista no elemento 0
editaAvalista("Manuel Silva", 0)

//mostrando o array
console.log(avalistas[0])
console.log(ordenaAvalista())

//exibindo os avalistas
exibeAvalistas();

//array bidimensional - mostrando em tabela
const clientes = [["Luana", 26, true], ["Adriano", 26, true], ["Ana Clara", 1, false]]

//mostrando o array em forma de tabela
console.table(clientes)

//mostrando o nome e idade do elemento 1, que é o Adriano, idade 26
console.log(clientes[1][0])
console.log(clientes[1][1])

//adicionando o Bruno na tabela
clientes.push(["Bruno", 27, false])
console.table(clientes)

//excluindo o Bruno - por ser o último da lista, pode usar somente pop()
clientes.pop()
console.table(clientes)

//adicionando a Sol no início da tabela
clientes.unshift(["Sol", 9, false])
console.table(clientes)