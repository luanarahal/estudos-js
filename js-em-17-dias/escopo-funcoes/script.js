//Escopo de funções mostra onde as variáveis podem ser acessados em determinada parte do código

let nome = "Luana"

function sauda() {
    let saudacao = "Olá Sr(a). " + nome; //conseguimos acessar uma variável que se encontra no escopo global
    return saudacao
}

console.log(sauda())
//console.log(saudacao) //não conseguimos acessar uma variável que está dentro de um escopo local