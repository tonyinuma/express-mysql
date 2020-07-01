const router = require('express').Router();
const { Film } = require('../../db/db');

router.get('/', async(req, res) => {
    /* res.send("Entraste correctamente Funciona!!"); */
    const films = await Film.findAll();
    res.json(films);
});

router.post('/', async(req, res) => {
    const films = await Film.create(req.body);
    res.json(films);
});

module.exports = router;