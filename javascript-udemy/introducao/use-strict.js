"use strict";
//use strict não deixa criar variáveis sem declará-las
//y = 10

function foo() {
    //se não tivesse o "use strict" lá em cima, a variável x seria global porque não foi declarada antes
    //posso colocar o "use strict" só aqui dentro do bloco também
    x = 20
}
foo()
console.log(x)
console.log(y)
/////////////
function dobrar(n1, n1) {
    return n1 * n1
}
//console.log(dobrar(5, 5))
//console.log(dobrar(5))
/////////////
function teste() {
    "use strict"
    console.log(this)
    this.a = "a"
}
teste()
/////////////
let msg = "uma string"
msg.count = 0
console.log(msg)