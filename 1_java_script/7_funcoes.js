

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

//Continuar em cloesure