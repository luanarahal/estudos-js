/* Sistema de cadastro de clientes */

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
    cliente = {
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista) {
            this.emprestimo.avalistas.push(avalista);
        },
        removeAvalista: function() {
            this.emprestimo.avalistas.pop();
        },
        editaAvalista: function(nomeAvalista, indice) {
            this.emprestimo.avalistas[indice] = nomeAvalista;
        },
        ordenaAvalista: function() {
            this.emprestimo.avalistas.sort();
        },
        exibeAvalista: function() {
            this.emprestimo.avalistas.forEach((avalista, indice) => {
                console.log(`O ${indice + 1}º avalista é ${avalista}`)
            })
        }
    }
    return cliente;
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

const cliente1 = cadastraCliente("Luana", "Luz", 26, 300000, 2, true, ["Adriano", "Ricardo", "Cris"])
//console.log(cliente1)

/*
cliente1.adicionaAvalista("José") //adicinará José no array
cliente1.adicionaAvalista("Marcos") //adicionará Marcos no array

cliente1.removeAvalista() //como Marcos está por último, irá removê-lo
cliente1.editaAvalista("Adriano Prates", [0]) //como "Adriano" está na primeira posição do array, iremos alterar para "Adriano Prates"
cliente1.ordenaAvalista() //ordenando o array para ficar em ordem alfabética
cliente1.exibeAvalista() //irá aparecer "O 1º avalista é Adriano Prates, o 2º avalista é Ricardo.... etc"
console.log(cliente1.emprestimo.avalistas)
*/

/*console.log(nome)
console.log(sobrenome)
console.log(taxaDeJuros)*/

/*
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

*/

function adicionaInfLogin(cliente, email, senha) {
    
    if(email.indexOf("@") !== -1 && senha.length > 5) {
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente;
    } else {
        return "Credenciais inválidas"
    }    
}

console.log(adicionaInfLogin(cliente1, "luana@gmail.com", "lu12345"))
console.log(adicionaInfLogin(cliente1, "luanarahal", "lu987654"))
console.log(adicionaInfLogin(cliente1, "luanarahal@gmail.com", "lu98"))