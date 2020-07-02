const Sequelize = require('sequelize');
const FilmModel = require('../models/film');
const UsersModel = require('../models/users');

const sequelize = new Sequelize('express_mysql','user','user',
        {host:'localhost',dialect:'mysql'}
    );

const Film = FilmModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
sequelize.sync({force:false}).then(()=>{console.log('Tablas sincronizadas');})

module.exports = {
    Film,
    User
}