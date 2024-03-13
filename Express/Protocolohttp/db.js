// biblioteca sequelize
const sequelize = require('sequelize')

//conexão com o banco de dados
const sequelize2 = new sequelize('postapp', 'root', '',{
    host: "localhost",
    dialect: 'mysql' //qual o tipo do banco de dados
})

//exportando a conexão
module.exports = {
    sequelize : sequelize,
    sequelize2 : sequelize2
}