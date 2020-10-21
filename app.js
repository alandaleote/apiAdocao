const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

const rotaAdotante = require('./app/routes/adotante.routes');
const rotaOng = require('./app/routes/ong.routes');
const rotaPet = require('./app/routes/pet.routes');


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.post('/login', (req, res, next) =>{
    if(req.body.user === 'admin' && req.body.pwd === '123admin'){
        const id = 1;
        const token = jwt.sign({ id_user: id, nome: 'admin' }, process.env.SECRET, {
            expiresIn: "1h"
        });
        return res.status(200).send({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
})


app.use('/adotante', rotaAdotante);
app.use('/ong', rotaOng);
app.use('/pet', rotaPet);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

  module.exports = app;