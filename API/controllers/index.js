var Planta = require('../models/index')

// Shop list
module.exports.list = () => {
    return Planta
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getId = id => {
    return Planta.find({_id:id})            
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getEspecie = especie => {
    return Planta.find({Especie: especie})            
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getImplant = implant => {
    return Planta.find({Implantacao:implant})            
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getFreguesias = () => {
    return Planta.distinct('Freguesia')            
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getEspecies = () => {
    return Planta.distinct('Especie')            
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.addPlanta = p => {
    return Planta.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
