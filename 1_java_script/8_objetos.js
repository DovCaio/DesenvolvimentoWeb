let carro = new Object();


carro.fabricacao = "Ford";
carro.modelo = "Mustang";
carro.ano = 1998;

//Propriedades não definidas assum o valor de undefined


//Podemos acessar ou alterar propriedades atraves de colchetes

carro["fabricacao"] = "Ford";
carro["modelo"] = "Mustang";
carro["ano"]  = 1998;

//Podemos definir o nomde das propriedades de diversas formas, porém se fugirmos do padrão de identificação js
//para acessar, alterar e até criar precisamos usar colchetes.

//Também podemos usar colchetes para criar propriedades dinamicamente

//Podemos iterar sobre as propriedades dos objetos usando o for in

function mostrarProps(objeto, nomeDoObjeto){

    let resultado = "";

    for(let i in obj){

        if(objeto.hasOwnProperty(i)){

            resultado += nomeDoObjeto + "." + i + " = " + obj[i] + "\n";

        }

    }

    return resultado;


}



//Inicializador de objetos

let objeto = {

    propriedade1: 1, 2: "valor_2",
    //...
    "propriedade n": "valor_n",

};



//Continuar em função construtora
