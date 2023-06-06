function calcular() {
    let numtxt = document.getElementById("numero")
    let select = document.getElementById("select")

    if(numtxt.value.length == 0) {
        window.alert("[ERRO] Insira um número.")
    } else {
        let numero = Number(numtxt.value)
        for(let c = 1; c <= 10; c++) {
            select.innerHTML += `<option>${numero} X ${c} = ${numero * c} </option>`
        }
    }
}