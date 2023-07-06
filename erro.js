function tratarErroELancar(erro){
    //throw new Error('...')
    throw 10
}

function imprimirNomeGritado(obj) {
    try{
            console.log(obj.name.toUpperCase()+ '!!!')
    }catch(e){
        tratarErroLancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome:'Fulano'}
imprimirNomeGritado(obj)

//try: é um bloco de codigo que dentro dele terá um codigo que será jugado se terá erro 
//ou não 
//catch: a setentça errada irá cair dentro do catch e com isso aqui dentro vc pode querer colocar a solução do erro
//finally: é uma setença que será executada de qualquer forma independente da setença que ou do erro ele chegará no final e será lançada
/*
Evite mostrar mensagens da sua infra no codigo, sejá coisas bem simples
*/