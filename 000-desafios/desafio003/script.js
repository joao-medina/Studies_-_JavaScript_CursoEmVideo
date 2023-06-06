function contar() {
    var iniciotxt = document.getElementById("inicio")
    var fimtxt = document.getElementById("fim")
    var passotxt = document.getElementById("passo")
    var resultado = document.getElementById("resultado")

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)

    for(inicio; inicio <= fim; inicio += passo) {
        resultado.innerHTML += `=> ${inicio} `
    }

    resultado.innerHTML += "<p><strong>Fim!</strong></p>"
}