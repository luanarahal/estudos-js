function aprovadoReprovado(array){
    let contAprovado = 0;
    let contReprovado = 0;

    for (const nota of array) {
        if (nota >= 7) {
            contAprovado += 1;
        } else {
            contReprovado += 1;
        }
    }
    return `Aprovados: ${contAprovado}. Reprovados: ${contReprovado}`;
}
console.log(aprovadoReprovado([10,9,7,2,8,5,10]));