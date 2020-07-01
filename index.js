const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});
