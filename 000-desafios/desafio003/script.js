function contar() {
    var iniciotxt = document.getElementById("inicio")
    var fimtxt = document.getElementById("fim")
    var passotxt = document.getElementById("passo")
    var resultado = document.getElementById("resultado")

    if(iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        window.alert("[ERRO] preencha todos os dados")
    } else {
        var inicio = Number(iniciotxt.value)
        var fim = Number(fimtxt.value)
        var passo = Number(passotxt.value)
    
        if(inicio > fim) {
            for(inicio; inicio >= fim; inicio -= passo) {
                resultado.innerHTML += `=> ${inicio} `
            }
        } else {
            for(inicio; inicio <= fim; inicio += passo) {
                resultado.innerHTML += ` 👉 ${inicio}`
            }
        }
        resultado.innerHTML += "<p><strong>Fim!</strong></p>"
    }

}