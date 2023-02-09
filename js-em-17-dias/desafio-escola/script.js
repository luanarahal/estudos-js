let relatorioEscolar = [["Adriano", 8], ["Luana", 7.5], ["Sol", 6]]
console.table(relatorioEscolar)

function aprovadoReprovado() {
    let notaAdriano = relatorioEscolar[0][1]
    let notaLuana = relatorioEscolar[1][1]
    let notaSol = relatorioEscolar[2][1]

    if(notaAdriano < 7) {
        console.log('Adriano reprovado!')
    } else {
        console.log('Adriano aprovado!')
    }

    if(notaLuana < 7) {
        console.log('Luana reprovado!')
    } else {
        console.log('Luana aprovado!')
    }
    
    if(notaSol < 7) {
        console.log('Sol reprovado!')
    } else {
        console.log('Sol aprovado!')
    }
}
aprovadoReprovado()