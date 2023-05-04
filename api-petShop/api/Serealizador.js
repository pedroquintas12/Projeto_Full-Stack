const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
class Serealizador{
    json(dados){
        return JSON.stringify(dados)
    }

    serealizar (dados){
        if(this.contentType === 'application/json'){
            return this.json(dados)

        }

        throw new ValorNaoSuportado(this.contentType)
    }

}

module.exports={

    Serealizar:Serealizador,
    formatosAceitos: ['application/json']
}