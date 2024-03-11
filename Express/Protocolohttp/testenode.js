const sequelize = require('sequelize')

const sequelize2 = new sequelize('testenode', 'root', '',{
    host: "localhost",
    dialect: 'mysql' //tipo do banco de dados que vai conectar
}) //conexão com o banco de dados

//Criando a estrutura da tabela via sequelize
const Postagem = sequelize2.define('postagens', {
    titulo: {
        type:sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
})

/*Passando dados para a tabela
Postagem.create({
    titulo: "Promocao dia das maes",
    conteudo: "No mes do dia das maes todas as lojas terão 50% de desconto nos esmaltes" 
}) 
*/

/* Executando a criação da tabela, só precisa ser feita uma vez
Postagem.sync({force:true}) */

//Criando a estrutura da tabela via sequelize
const Usuario = sequelize2.define('usuarios', {
    nome: {
        type: sequelize.STRING
    },
    sobrenome: {
        type: sequelize.STRING
    },
    idade: {
        type: sequelize.INTEGER
    },
    email: {
        type: sequelize.STRING
    }
})


/* Inserindo dados na tabela usuários
Usuario.create({
    nome: "Jaíne",
    sobrenome: "Costa",
    idade: "18",
    email: "jaine.jcosta@senacsp.edu.br"
})
*/

/* uma vez criada a tabela podemos comentar está linha
Usuario.sync({force: true}) */



/* Teste de conexão com o banco
sequelize2.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar" + erro)
})
*/
