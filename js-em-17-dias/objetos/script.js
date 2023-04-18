const carro = {
    nome: "Versa",
    marca: "Nissan",
    cor: "Branca",
    ano: 2020,
    emplacado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.0
    },
    kmPercorridos: function() {
        return `O ${this.nome} percorre ${this.consumo * this.capacidadeTanque}km com um tanque cheio.`
    }
}

//alterando um elemento do objeto
console.log(carro.cor) //irá mostrar branca porque ainda não alterei
carro.cor = "Preto" //alterando
console.log(carro.cor) //alterado para preto

//adicionando consumo e capacidade do tanque
carro.consumo = 15  
carro.capacidadeTanque = 45

//deletando o ano do objeto
delete carro.ano
console.log(carro.ano)

//chamando a função kmPercorridos que está dentro do objeto carro
console.log(carro.kmPercorridos())

//usando o método keys - que aparece todos as chaves do objeto carro
const chaves = Object.keys(carro)
console.log(chaves)

//usando o método values - que retorna um array com os valores de cada propriedade
const valores = Object.values(carro)
//console.log(valores)

//usando o método entries - retorna um array correspondente aos pares de propriedades [chave:valor]
const tuplas = Object.entries(carro)
//console.log(tuplas)

//usando o método assign - copia as propriedades de um objeto de origem para um de destino
const carro2 = Object.assign(carro)
//console.log(carro2)

//utilizando for of para percorrer os dados do array, irá aparecer assim: "nome: versa, marca: nissan......etc"
for(const [chave, valor] of Object.entries(carro)) {
    console.log(`${chave}: ${valor}`)
}


