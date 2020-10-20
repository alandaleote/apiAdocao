const { User } = require('./app/models');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/find/:id', (req, res) => {
  res.json('Im in register');
});
app.get('/findall', (req, res) => {
  res.json('Im in Find All');
});



//user.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.listen(3000);