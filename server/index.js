const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const port = 4000


const app = express();
app.use(bodyParser.json());
app.use( cors())
massive( process.env.CONNECTION_STRING).then( dbInstance => app.set('db', dbInstance), app.listen(port, () => console.log('Listening on port ' + port)))

app.get('/api/inventory', controller.getProducts );
app.post('/api/product', controller.addProduct);
app.delete('/api/product', controller.deleteProduct)

