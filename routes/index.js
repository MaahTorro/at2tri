module.exports = (app) =>{
    app.get('/', async (req, res) =>{
        const { produto, conexao } = require("../config/database")
        
        /*const ordem = req.query.ordem
        conexao()
        let resultadoAll=null
        if(!ordem || ordem==2){
            resultadoAll = await conexao.produto.find().sort({validade:1})
        } else{
            resultadoAll = await conexao.produto.find().sort({produto:1})
        }
    
        console.log(resultadoAll)
        res.render('index.ejs',{resultadoAll})*/

        conexao()

        const resultado = await produto.find()

        res.render('index.ejs', { resultado })
    })

    app.set('../views/index.ejs')
}