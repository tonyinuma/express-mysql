const Sequelize = require('sequelize');


const sequelize = new Sequelize('express_mysql','user','user',
        {host:'localhost',dialect:'mysql'}
    );
