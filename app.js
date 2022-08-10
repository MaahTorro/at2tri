const servidor = require("./config/servidor")
const app = servidor.app
const porta = servidor.porta

const index = require('./routes/index')(app)
const cadastro = require('./routes/cadastro')(app)

app.listen(porta, () => {
    console.log('http://localhost/:' + porta)
})

