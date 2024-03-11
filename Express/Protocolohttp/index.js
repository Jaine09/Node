var express = require('express') //Trazendo a conexão com o pacote express

const app = express() //Instancia para requisitar qualquer coisa do pacote

//chamando a bilioteca handlebars
const handlebars = require('express-handlebars')

// biblioteca sequelize
const sequelize = require('sequelize')

// configuro o handlebars e o templete
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view.engine', 'handlebars')

//conexão com o banco de dados
const sequelize2 = new sequelize('testenode', 'root', '',{
    host: "localhost",
    dialect: 'mysql' 
})

//criar rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars')
})

//uma nova rota post
app.post('/add', function(req,res){
    res.send('FORMULARIO RECEBIDO')
})

//Porta do protocolo http
app.listen(8081, function(){
    console.log("O servidor está rodando no endereço http://localhost:8081")
}) //Sempre a última linha do código

/*
 http.createServer(function(req, res)// requisição e resposta{
 res.end("Porta OK");
 }).listen(8081);*/ //Conectando o cliente no servidor Listen: informa a porta


