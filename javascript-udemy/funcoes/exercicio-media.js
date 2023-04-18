(function() {
    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== "number") {
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0 //para caso qtd seja = 0 (Não tenha parâmetros) retorne zero
    }

    let media = calcularMedia(2, 4, 6)
    console.log(media)
})()