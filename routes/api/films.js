const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Entraste correctamente Funciona!!");
});

module.exports = router;