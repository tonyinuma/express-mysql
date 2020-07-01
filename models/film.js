
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('film',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        score: DataTypes.INTEGER,
        director: DataTypes.STRING,
    })
}


