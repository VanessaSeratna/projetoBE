const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [{
    nome: 'Vanesa Santos Pereira',
    imagem: 'C:\Users\Desktop\projeto-back-end\img\vanessa.jpg',
    minibio: 'mulher, desenvolvedora'
},
{
    nome: 'Elizabeth Santos Pereira',
    imagem: 'C:\Users\Desktop\projeto-back-end\img\elizabeth.jpg',
    minibio: 'mulher, cientista ambiental e desenvolvedora'
}
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)