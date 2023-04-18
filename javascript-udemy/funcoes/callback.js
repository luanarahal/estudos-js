function teste(cb) {
    console.log("função teste")
    cb()
}
teste(function () {
    console.log("função anônima de callback")
})