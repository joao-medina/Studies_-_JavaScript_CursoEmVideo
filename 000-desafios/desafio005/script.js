const lista = []

function adicionar() {
    let selectstr = document.getElementById("num")
    let option = document.getElementById("lista")
    let select = Number(selectstr.value)

    if(select < 1 || select > 100) {
        window.alert("Insira um número válido")
    } else {
        lista.push(select)
        option.innerHTML += `<option>Valor ${select} adicionado</option>`
    }
}

function verificar() {
    let res = document.getElementById("res")
    let soma = 0
    for(c in lista) {
        soma += lista[c]
    }

    let media = soma / lista.length

    lista.sort()

    res.innerHTML += `<p>- Ao todo, temos <strong>${lista.length} números cadastrados</strong></p>`
    res.innerHTML += `<p>- O maior número cadastrado foi o <strong>${lista[lista.length - 1]}</strong></p>`
    res.innerHTML += `<p>- O menor número cadastrado foi o <strong>${lista[0]}</strong></p>`
    res.innerHTML += `<p>- A soma de todos os números foi <strong>${soma}</strong></p>`
    res.innerHTML += `<p>- A média dos números foi <strong>${media}</strong></p>`
}