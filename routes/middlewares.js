const jwt = require('jwt-simple');
const moment = require('moment');


const checkToken = (req, res, next) => {
    
    if (!req.headers['user-token']) {
        res.json({ error: 'user-token is required' });
    }

    const userToker = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToker, 'secretphrase');
    } catch (err) {
        res.json({ error : 'token is invalid'});
    }

    if (payload.expiredAt < moment().unix()) {
        res.json({ error: 'user-token expired' });
    }

    req.usuarioId = payload.usuarioId;

    next();

}

module.exports = {
    checkToken: checkToken
}