module.exports = (app) =>{
    app.get('/', (req, res) =>{
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
            res.render('index.ejs')


    })
    
    //renderizar o arquivo index.ejs na requisição / (root)
    app.get('/', async(req,res)=>{
    //conectar com o revisao
    conexao()
    //buscar todos os dados de infos
    const resultado = await infos.find()
    res.render('index.ejs', {resultado })
})


}
