const router = require('express').Router();
const apiFilmsRouter = require('./api/films');
const apiUsersRouter = require('./api/users');
const middlewares = require('./middlewares');

router.use('/films', middlewares.checkToken ,apiFilmsRouter);
router.use('/users',apiUsersRouter);

module.exports = router;