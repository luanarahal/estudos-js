//var isValid = false //usando var, ambas as isValid são declaradas globalmente, então a modal sobrescreverá a menu, porque está por último no html
//function init() {
//    console.log("init menu")
//}
//init()

(function(n1, n2, n3){
    let isValid = false
    console.log(" menu", isValid, n1, n2, n3)

    function init() {
        console.log("init do menu") 
    }
    init()
})(1, 2, 3)