const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use( cors())
massive( process.env.CONNECTION_STRING).then( dbInstance => app.set('db', dbInstance))

app.get('/api/inventory', controller.getProducts )
app.post('/api/product', controller.addProduct)

const port = 4000
app.listen(port, () => console.log('Listening on port ' + port))