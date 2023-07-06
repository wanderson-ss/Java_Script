const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa
//tire do objeto pessoa o nome e idade

console.log(nome,idade)


const{nome: n , idade: i} = pessoa
console.log(nome,idade)

//Criando variaveis no objeto pessoa e com isso ele ainda assim estrai a o undefined

const {sobrenome, bemHumorada = true}= pessoa

console.log(sobrenome, bemHumorada )

const{endereco:{logradouro,numero,cep}}=pessoa
console.log(logradouro, numero, cep)


//cuidado na extração se sim o dado está setado.