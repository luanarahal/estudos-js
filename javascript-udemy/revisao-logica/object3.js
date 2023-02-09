const produto = {
    nome: "caneta",
    qtd: 10,
    comprar/*: function*/(n) { //pode ou não usar escrito function, é mais para entendimento
        console.log(this)
        if (n > this.qtd) {
            return "quantidade não disponível"
        }
        this.qtd -= n
    },
    teste1: function() {
        console.log("teste1")
        console.log(this)
    },
    teste2: () => { //retorna como vazio com arrow functions
        console.log("teste2")
        console.log(this)
    }
}
produto.comprar(3)
//console.log(produto)

produto.comprar(13)
//console.log(produto) //não irá mudar porque como tem 7 atualmente, não irá deixar comprar 13

produto.teste1()
produto.teste2()