console.log(Math.ceil(6.1))
//Math:
const obj1 = {}
obj.nome = 'Bola'
//obj.['nome'] = 'Bola2' // ela sobrescreve o valor obj.nome
console.log(obj1.nome)


function obj(nome){
    this.nome = nome
    //criar um atributo com o this.nome 
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Object('Cadeira')
const obj3 = new Object('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
