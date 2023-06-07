let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 78.3,
    engordar(p) {
        this.peso += p
    }
}

console.log(`${amigo.nome} tem ${amigo.peso}kg.`)
amigo.engordar(10)
console.log(`${amigo.nome} engordou, agora ele tem ${amigo.peso}kg`)
