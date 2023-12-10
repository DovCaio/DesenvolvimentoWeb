const fs = require("fs");

const produto = {

    nome : "Coca cola",
    preco: 10.00,
    desconto: 0.15

}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), erro =>{

    console.log(erro || "Arquivo salvo"); //Caso ocorra um erro ele printa o erro, do contrario ele diz que o arquivo foi salvo.


});