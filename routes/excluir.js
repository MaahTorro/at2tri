const { produto, conexao } = require("../config/database")

module.exports = (app) =>{
  app.get('/excluir/:id', async (req, res) =>{
    const { id } = req.params
    
    await produto.findOneAndDelete({ _id: id });
  }) 
}
// poe pra me seguir ai vou fazer a outra q


// confia MARCELA RIMA COM VAGABUNDA 
//ou assim:
    // pegar o id da rota
    // usar o findAndDelete
    // é noiss

    // pra pegar o id da rota é assim:



// transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e 

