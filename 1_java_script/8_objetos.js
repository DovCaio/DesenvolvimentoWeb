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



//Função Construtora
//Como fica claro no nome é uma função que cria um objeto.


function Pessoa(nome, idade, sexo){

    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;


}


let caio = new Pessoa("Caio", 20, "M");



function Carro(marca, modelo, ano, dono){


    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;


}


let meuCarro = new Carro("Eagle", "Talon TSI", 1993, caio); //Temos que usar o new


//Objeto create
//permite que escolhamos o objeto protótipo para o objeto

/*
let Animal = {

    tipo : "Invertebrado",
    qualTipo: function (){

        console.log(tipo);

    }


}

let animal1 = Object.create(Animal);
animal1.qualTipo();

let peixe = Object.create(Animal);
peixe.tipo = "Peixe";
peixe.qualTipo();
*/
//Heranças
//todos os objetos em javascript herdam de pelos menos um outro objeto. O objeto "Pai" é conhecido como
//Protótipo, e as propriedas herdadas podem ser encontradas no objeto prototype do construtor.


//Podemos definir uma propriedade de um objeto pelo nome por um indice ordinal, a depender que qual
//escolhemos devemos sempre acessar essa propriedade atravez do definido


meuCarro[5] = "25mpg"; //Só pode ser referido pelo indice
meuCarro.cor = "Vermelho"; //So pode ser referido pelo atributo cor

//A exceção a esta regra é a objetos refletidos apartir do HTML, onde podemos nos referir a essas matrizes
//pelo número (Com base no que eles aparecem no documento) ou seu nome (Se definido)


//Definidos  propriedades para um tipo de objeto
//podemos adicionar um atributo a todos do tipo definido anteriormente usando prototype

Carro.prototype.cor = null; //Agora todos os objetos do tipo Carro tem um atributo cor que por padrão inicia com null

carro.cor = "preto";

//Definindo métodos

//nomeDoObjeto.nomeDoMetodo = nomeDafuncao;

let meuObjeto = {

    meuMetodo: function (parametros){

        //faça algo ...

    }

}



function mostreCarro(){


    let resultado = "Um belo" + this.ano + " " + this.fabricacao + "" + this.modelo;

    pretty_print(resultado);


}


//Podemos remover propriedades não herdadas, apartir do operador delete

let meuObjeto2 = new Object();
meuObjeto2.a = 4;
meuObjeto2.b = 12;

delete meuObjeto2.a;
console.log('a' in meuObjeto2); //false


//Comparando objetos
//dois objetos só podem ser iguais caso sejam do mesmo tipo, não adianta apenas terem as mesma propriedades
//com os mesmos valores

let fruta = {name : "Maca"};
let barraDeFruta = {name: "Maca"};

console.log(fruta == barraDeFruta); //false
console.log(fruta === barraDeFruta); //false

