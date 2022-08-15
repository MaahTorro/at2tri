const {
  produto,
  conexao
} = require("../config/database")

module.exports = (app) => {
  app.get('/desfazer/:id', async (req, res) => {
    const {
      id
    } = req.params

    await produto.findOneAndUpdate({
      _id: id
    },
    {
      status: 1     
    });
  })
}
