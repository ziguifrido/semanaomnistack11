const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Parms: Parâmetros nomeados enviados na tora após "?" (Filtros, Paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */



app.listen(3333);

