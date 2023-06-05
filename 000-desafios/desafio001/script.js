function carregar(){
    var titulo = document.getElementById('titulo')
    var horas = document.getElementById('horas')
    var imagem = document.getElementById('img')

    var hoje = new Date()
    var horaatual = hoje.getHours()
    var minutoatual = hoje.getMinutes()

    horas.innerHTML += horaatual
    horas.innerHTML += ':'
    horas.innerHTML += minutoatual

    if(horaatual >= 6 && horaatual < 12){
        titulo.innerHTML = 'Bom dia!'
        document.body.style.backgroundColor = '#f0cb67'
        imagem.src = 'imagens/manha.png'
        imagem.alt = 'imagem do dia'
    } else if(horaatual >= 12 && horaatual < 18){
        titulo.innerHTML = 'Boa tarde!'
        document.body.style.backgroundColor = '#c97b4a'
        imagem.src = 'imagens/tarde.png'
        imagem.alt = 'imagem da tarde'
    } else {
        titulo.innerHTML = 'Boa noite!'
        document.body.style.backgroundColor = '#273360'
        imagem.src = 'imagens/noite.png'
        imagem.alt = 'imagem da noite'
    }
}