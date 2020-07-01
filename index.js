const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');
const apiRouter = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
