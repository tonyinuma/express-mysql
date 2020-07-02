const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { User } = require('../../db/db');

router.post('/signin', [
    check('username','username is required').not().isEmpty(),
    check('email','email is incorrect').isEmail(),
    check('password','pasword is required').not().isEmpty(),
], async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body);
    res.json(user);

});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: 'TOKEN' });
        } else {
            res.json({ error: 'Error en contraseña' });   
        }
    } else {
        res.json({ error: 'Error en usuario y/o contraseña' });
    }
});


module.exports = router;