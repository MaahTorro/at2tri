const servidor = require("./config/servidor")
const app = servidor.app
const porta = servidor.porta

require('./routes/index')(app)
require('./routes/cadastro')(app)
require('./routes/excluir')(app)
require('./routes/desfazer')(app)

app.listen(porta, () => {
    console.log('http://localhost:' + porta)
})
