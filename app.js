const servidor = require("./config/servidor")
var app = servidor.app
var porta = servidor.porta


app.get('/', (req, res) =>{
    res.send('servidor funcionando em http://localhost:' + porta)
})

app.listen(porta, () => {
    console.log('http://localhost:' + porta)
})

