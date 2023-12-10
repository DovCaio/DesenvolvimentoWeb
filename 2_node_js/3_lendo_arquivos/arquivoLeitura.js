const fs = require("fs");

const caminho = __dirname + "/arquivo.json";//__dirnam é uma constate que representa o diretorio atual.

//Forma síncrona...
//a forma sincrona lê todo o arquivo antes retornar ele.
const conteudo = fs.readFileSync(caminho, "utf-8"); //Caminho do arquivo e o formato do texto
console.log(conteudo);


//Forma assincrona..
//a forma assincrona da o arquivo aos poucos, conforme é carregado. Melhor que a forma antiga.
fs.readFile(caminho, "utf-8", (erro, conteudo) => {

    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);

});


//Ou podemos usar somente o require

const config = require("./arquivo.json");

console.log(config.db);