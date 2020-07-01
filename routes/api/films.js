const router = require('express').Router();
const { Film } = require('../../db/db');

router.get('/', async(req, res) => {
    /* res.send("Entraste correctamente Funciona!!"); */
    const films = await Film.findAll();
    res.json(films);
});

module.exports = router;