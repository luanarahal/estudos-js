function interrogatorio() {
    let numSim = 0;

    let perg1 = Number(prompt("Telefonou para a vítima? 1 - Sim 2 - Não"))
    let perg2 = Number(prompt("Esteve no local do crime? 1 - Sim 2 - Não"))
    let perg3 = Number(prompt("Mora perto da vítima? 1 - Sim 2 - Não"))
    let perg4 = Number(prompt("Devia para a vítima? 1 - Sim 2 - Não"))
    let perg5 = Number(prompt("Já trabalhou com a vítima? 1 - Sim 2 - Não"))


    if(perg1 === 1) {
        numSim += 1;
    }
    if(perg2 === 1) {
        numSim += 1;
    }
    if(perg3 === 1) {
        numSim += 1;
    }
    if(perg4 === 1) {
        numSim += 1;
    }
    if(perg5 === 1) {
        numSim += 1;
    }
    return numSim
}

function classifica(numSim) {
    if(numSim === 5) {
        console.log("Assasino!")
    } else if (numSim === 4 || numSim === 3) {
        console.log("Cúmplice")
    } else if (numSim === 2) {
        console.log("Suspeito!")
    } else {
        console.log("Inocente!")
    }
}

classifica(interrogatorio())