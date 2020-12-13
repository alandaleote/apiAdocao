const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const rotaAdotante = require('./app/routes/adotante.routes');
const rotaOng = require('./app/routes/ong.routes');
const rotaPet = require('./app/routes/pet.routes');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

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