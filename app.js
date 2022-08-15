const servidor = require("./config/servidor")
const app = servidor.app
const porta = servidor.porta

require('./routes/index')(app)
require('./routes/cadastro')(app)
require('./routes/excluir')(app)
require('./routes/desfazer')(app)

app.listen(porta, () => {
    console.log('http://localhost/:' + porta)
})

// De 4 eh mais gosto#1234 I2SSO31 vazou o penultimo discord dela ai boykkskkkkkkkkkkkkkkkk galaxyysimm
// epoca q vc FARMAVA webnamorado ha ha ha ha
// to brincando coe KKKKKK
//vai comer vai...queria eu comer :(
 // come cmg me leva junto ent
 // levo jaja tou ai dnv nao ironicamente kkkk okok tchau linda qlqr coisa chama no zap ta vai la bj bjbjs