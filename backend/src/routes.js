const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/DevController');


const routes = Router();

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);
module.exports = routes; // arquivo criado e rotas exportadas