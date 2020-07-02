
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING(50),
    })
}