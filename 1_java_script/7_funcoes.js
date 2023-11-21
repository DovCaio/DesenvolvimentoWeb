

//Sintaxe

function quadrado(numero){

    return numero * numero; //Não é obrigatório

}


//Se passarmos um objeto para um função e atributos desse objeto serem alterados a aleteração é visivel fora da função


function funca(objeto){

    objeto.nome = "caio";

}

let pessoa = {nome:"fulano"};

console.log(pessoa.nome);

funca(pessoa);

console.log(pessoa.nome);

//Uma função pode ser uma expressão

let funcao = function () {console.log("Ola");}

funcao();

//Podemos usar recursividade

function finbonnaci(n){
    let valor;

    if(n === 1 || n === 2){

        valor = 1

    }else{

        valor = finbonnaci(n - 1) + finbonnaci(n - 2);

    }

    

    return valor;

}

console.log(finbonnaci(15));


//Funções podem receber funções como parametro.

function funciona(f, valor){

    let novoValor = [];

    for (let i = 0; i < valor.length; i++){

        novoValor.push(f(valor[i]));

    }

    return novoValor;

}

console.log(funciona(
    function(x){return x * x * x;},
    [1, 2, 3, 4, 5]
)
);

//Para uma função funcionar não é necessário que ela seja declarada antes de sua utilização, isso apenas
//para funções definidas com function nomeFuncao(){}


//Uma função pode acessar qualquer variável, desde que ela seja global

//Em js quando temos uma função aninhada dentro de outra, as variáveis da função externa tem visibilidade
//para as funções internas, porém, as variáveis internas não podem ser acessadas pela função mais interna
//quando fazemos uma função interna que da acesso a alguma variável dela para fora do aninhamento das funções
//chamamos de closure


let pet = function(nome){

    function getNome(){

        return nome;

    }

    return getNome; //Expõe a função para um escopo externo


}

let myPet = pet("Dog");


myPet();  //Retorna Dog


let criarPet = function(nome){

    let sexo;

    return{//Todas as variáveis passa a ser expostas, parâmetros também, atravez desse return


        setNome: function(novoNome){

            nome = novoNome


        },

        getNome : function (){

            return nome;

        },

        setSexo : function(novoSexo){

            sexo = novoSexo

        },

        getSexo : function () {
            return sexo;
        }
    }


}


let meuPet = criarPet("Lulu");

meuPet.getNome(); //Lulu

meuPet.setSexo("Macho");
meuPet.getSexo(); //Macho


//CUIDADO: caso tenha uma função interna que contém uma mesma variável, parâmetro também se encaixa,
//não é possível acessar a mais externa, o this depende de como a função é chamada e não de como é definida



//Dentro das funções temos um array chamado arguments, como o nome diz ele se refere aos argumentos
//ordinamente ele guarda os argumentos, do 0 ao n


//Funciona como o join, para n Strings
function meuConcatenador(separador){

    let retorno = "";


    for(let i = 1; i < arguments.length; i++){

        retorno += separador + arguments[i];

    }
    
    return retorno;


}

meuConcatenador(",", "Caio", "Kaua", "Serginho", "Josefa"); //Assim podemos passar quanto argumentos quisermos

//Em outras LP's podemos definir parâmetros padrões caso não seja fornecido na chamada da função
//fazemos assim em js

function multiplicar(a, b = 1){

    return a * b;

}

//Parâmetros rest: podemos representar um número indefinido de parâmetros com essa sintaxe
//acredito que com o array arguments funcione da mesma forma.


function multiplicar(multplicador, ...args){

    return args.map((x) => x * multplicador);

}

let mul = multiplicar(3, 1, 2, 3); // [3, 6, 9]



//Arrow functions

() => "ola";

//temos um problema com funções desse forma, cada uma delas cria um novo this para elas, para contornar isso
//podemos atribuir o this desejado a uma variável e toda vez que precisarmos usar o escopo da funçao externa
//chamamos essa variavel

function pessoa(a){

    let idade = 0;

    let self = this;

    setInterval(() => {self.idade++}, 1000);


}
