// fazendo a requisição com o banco de dados
const db = require('./db')

//criando a nova tabela
const postTabela = db.sequelize2.define('postagens', {
    titulo: {
        type: db.sequelize.STRING
    },
    conteudo: {
        type: db.sequelize.STRING
    }
})

//exportando a minha tabela
module.exports = postTabela;

/* COMENTAR APÓS A CRIAÇÃO DA TABELA
//reaizar a criação da tabela
postTabela.sync({force:true})

//testando sucesso ou erro
.then(()=>{
    console.log('Tabela criada com sucesso')
})
.catch((error) => {
    console.log('Erro ao criar a tabela: ', error)
})
*/