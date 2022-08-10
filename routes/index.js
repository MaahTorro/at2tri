const { app } = require("../config/database")

module.exports = (app) =>{
    app.get('/', (req, res) =>{
        const ordem = req.query.ordem
        conexao()
        let resultadoAll=null
        if(!ordem || ordem==2){
            resultadoAll = await conexao.produto.find().sort({validade:1})
        } else{
            resultadoAll = await conexao.produto.find().sort({produto:1})
        }
        
            console.log(resultadoAll)
            res.render('index.ejs',{resultadoAll})
    })
}

app.post('/', (req, res) =>{
    var conexao = require ('../config/database')
    conexao()

    var modelo = require('../models/')

})