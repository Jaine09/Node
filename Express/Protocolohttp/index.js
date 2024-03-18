var express = require('express') //Trazendo a conexão com o pacote express

const app = express() //Instancia para requisitar qualquer coisa do pacote

//chamando a bilioteca handlebars
const handlebars = require('express-handlebars')

//chamando a biblioteca body-parser (ágiliza a ocnexão do banco com o backend)
const bodyParser = require('body-parser')

//reuisição da minha tabela (após expostar a tabela deve ser requisitada)
const post = require('./post')

// configurando o handlebars e o templete engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}}))
app.set('view.engine', 'handlebars')

//Configurando a body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//criar rota
app.get('/cad', function(req,res){
    res.render('formulario.handlebars')
})

//rota para a home, pegar tudo que está no banco e exibir na tela
app.get('/', function(req,res){
post.findAll({order: [['id', 'DESC']]}).then(function(posts){ 
    res.render('home.handlebars', {posts: posts})
})
})

//uma nova rota post
app.post('/add', function(req,res){
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
})

//criando a rota para deletar
app.get('/deletar/:id', function(req,res){
    post.destroy({where: {'id': req.params.id}})
    .then(function(){
        res.send("Postagem deletada")
    }).catch(function(erro){
        res.send("Essa postagem não exite")
    })
})

//Porta do protocolo http
app.listen(8081, function(){
    console.log("O servidor está rodando no endereço http://localhost:8081")
}) //Sempre a última linha do código

/*
 http.createServer(function(req, res)// requisição e resposta{
 res.end("Porta OK");
 }).listen(8081);*/ //Conectando o cliente no servidor Listen: informa a porta
