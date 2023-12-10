const porta = 3003;

const express = require("express");


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

const bancoDeDados = require("./bancoDeDados");

app.get("/produtos", (req, res, next) => {

    res.send(bancoDeDados.getProdutos()) //Automaticamente é convertido para JSON


});

app.get("/produtos/:id", (req, res, next) =>{

    res.send(bancoDeDados.getProduto(req.params.id)); //O id aparece em params por que esta na url :id

})

app.post("/produtos", (req, res, next) => {

    let produto = {

        nome : req.body.nome,
        preco : req.body.preco
    }

    res.send(bancoDeDados.salvarProduto(produto))

})

app.put("/produtos", (req, res, next) => {

    let produto = {

        id : req.body.id,
        nome : req.body.nome,
        preco : req.body.preco

    }

    res.send(bancoDeDados.salvarProduto(produto ));

})


app.delete("/produtos/:id", (req, res, next) => {

    bancoDeDados.deletaProduto(req.params.id);

    res.send("Deletado!");

})

app.use((req, res, next) => { //Qualquer url que tiver uma requisição vai passar por aqui

    console.log("Aparece sempre");

})



app.listen(porta, () =>{

    console.log(`Servidor executando na porta ${porta}`);

});