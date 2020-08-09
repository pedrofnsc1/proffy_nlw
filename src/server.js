//inicializando o express e nunjucks
const express = require('express');
const server = express();
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages");

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
  autospace: false,
})

server
//Receber os dados por meio do req.body
.use(express.urlencoded({extended: true}))
//configuração de arquivos estáticos
.use(express.static("public"))
//configuração de rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(3000);


/*
 * Cada um dos gets é uma rota que retorna como 
 * resposta a minha view que acessei no site (<a href=""/>)
 * 
 * modo de fazer um get usando arrow function
 * .get("/study", (re q, res) => {
 * return res.sendFile(__dirname + "/views/study.html");
 * })
 */