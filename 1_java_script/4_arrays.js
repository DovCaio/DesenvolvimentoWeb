//Podemos armazenar diferentes tipos dentro de um array

var random = ["tree", 795, [0, 1, 2]];


//Podemos alterar itens com index deles

random[1] = 1;

//Comprimento do array

random.length; //3

//Temos o split que é um método de strings

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

let array = myData.split(','); //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]

//Temos o inverso do split que é o join, transforma um array de string em uma string só, o parametro é o separador

let novaString = array.join(",") //"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"


//Inserir um iten a um array

let novoTamanho = array.push("Brazil"); //Adiciona brazil no final array e retorna o novo tamanho

let novoTamanho2 = array.unshift("Alemanha"); //Adiciona brazil no começo do array e retorna o novo tamanho


//Remover iten de um array

let itemRemovido = array.pop(); //Remove o último item, e retorna ele

let itemRemovido2 = array.shift(); //Remove o primeiro item, e retorna ele






