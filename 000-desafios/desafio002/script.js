function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById('ano')
    var resultado = document.getElementById('resultado')
    
    if(ano.value > anoatual || ano.value.length < 4){
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente.')
    } else {
        var idade = anoatual - Number(ano.value)
        var inputsexo = document.getElementsByName('radiosex')
        var sexo
        var letra
        var pessoa
        
        if(inputsexo[0].checked) {
            sexo = 'homem'
            letra = 'm'
        } else if(inputsexo[1].checked) {
            sexo = 'mulher'
            letra = 'f'
        }        
        
        if(idade < 13) {
            pessoa = 'crianca'
        } else if(idade < 19) {
            pessoa = 'jovem'
        } else if(idade < 60) {
            pessoa = 'adulto'
        } else {
            pessoa = 'idoso'
        }
        
        resultado.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        resultado.innerHTML += `<img src="imagens/${pessoa}${letra}.png" alt="imagem">` 
        resultado.style.textAlign = 'center'      
  
    }
}