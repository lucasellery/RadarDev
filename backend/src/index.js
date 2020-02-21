const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //aplicação criada com a funcao express()

mongoose.connect('mongodb+srv://lucas_ellery:lucasellery@cluster0-uxz9l.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json()); //será válido para todas as rotas da api
app.use(routes);

app.listen(3333); //porta da minha aplicacao
