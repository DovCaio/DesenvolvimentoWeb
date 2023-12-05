//Uma promisse é um objeto que representa eventualmente conclusão ou falha de um aperação assíncrona
//Essencialmente, é um objeto retornado para o qual você adiciona callbacks, em vez de passar um callback para a função


//Por exemplo, em vez de uma função old-style que espera dois callbacks e chama um deles em uma
//eventual conclusão ou falha

function callbackDeSucesso(){

    console.log("Deu Certo!");
}

function callbackDeFalha(){

    console.log("Deu falha!");

}


fazAlgumaCoisa(callbackDeSucesso, callbackDeFalha);

//Ao invés de fazermos da forma anterior, as funções modernas retornam promises, dessa forma:

fazAlgumaCoisa().then(callbackDeSucesso, callbackDeFalha);


//Garantias
//Callbacks não serão chamadas antes da conclusão da execução atual do loop de eventos do javaScript.
//Callbacks adicionadas com then mesmo depois do sucesso ou falha da operação assíncrona, serão chamadas,
//como acima.
//Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados
//independentemente da ordem de inserção.
//Mas o benefício mais imediato das promises é o encadeamento.


//Encadeamento
//Uma necessidade comum é executar duas ou mais operações assíncronas consecutivas, onde cada operação
//subsequente começa quando a operação anterior é bem sucessida

const promises1 = fazAlgumaCoisa();
const promises2 = promises1.then(callbackDeSucesso, callbackDeFalha);

//a promises2 representa tanto a conclusão do fazAlgumaCoisa, mas também do callbackDeSucesso ou calllbackDeFalha
//caso precisarmos de outras promises encadeamos apartir da promises2

//Para realizar operações assincronas fazemos assim

fazAlgumaCoisa()
    .then(function( resultado){

        return fazAlgumaOutraCoisa(resultado);

    })
    .then(function (novoResultado){

        return fazUmaTerceiraCoisa(novoResultado);

    })
    .then(function (resultadoFinal){

        console.log("O resultado final foi pego: " + resultadoFinal);

    })
    .catch(callbackDeFalha);



//Importante: Sempre retonar um resultado, de outra forma as callbacks não vão capturar o resultado da promisse anterior


//Podemos encadear depois do catch

new Promise((resolve, reject) => {

    console.log("Incial");

    resolve();

})
    .then(() => {

        throw new Error("Algum erro acontece");

        console.log("Faça isso");

    })
    .catch(() => {

        console.log("Faça aquilo");

    })
    .then(() => {

        console.log("Faça isso, seja la o que tenha acontecido antes");

    })


/*
    O de cima vai produzir o seguinte

    Inicial
    Faça Aquilo
    Faça isso, seja la o que tenha acontecido antes
*/


//Criando uma promise apartir de uma callback API antiga
//podemos criar uma Promise do zero usando seu contrutor, apenas para API's antigas

//Nem todas as funções assíncronas já retornam promises, algumas ainda esperam retorno de sucesso ou falha

//Um exemplo é setTimeout()

setTimeout(() => falaAlgumaCoisa("10 segundos passados"), 10000); 

//Se falarAlgumaCoisa falhar ou tiver algum erro de programação, nada o captura, porém podemos envolver
//em uma promise, é um boa prática para funções problemáticas

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
    .then(() => falaAlgumaCoisa("10 segundos passados"))
    .catch(callbackDeFalha);


//Composição


