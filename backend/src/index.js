//importando uma funcionalidade no node 
// estou importando a funcionalidade express na variavel express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//prox variavel vai armazenar minha aplicação
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query params: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */









