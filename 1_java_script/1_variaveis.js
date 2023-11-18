//Variáveis e constantes

// Método antigo
var a = 3;

// Método novo
let b = 4;

//Não podemos declarar novamente uma variavel já criada com a palavra reservada let, isso gera um erro

//Constante

const c = 64;

//Não podemos redefinir de forma alguma uma constante, obiviamente.


//JavaScript tem tipagem fraca.

//Boas práticas para nomear as variáveis, segue o padrão de muitas outras LP's.
//Quando declaramos o nome das variáveis devemos apenas usar caracteres 0-9, A-Z, a-z, por motivos de boas praticas.
//Não usar underline no começo das variáveis isso tem um significado a mais, que é usando em coisas específicas
//Não podemos usar números, também não é permitido pela linguagem.
//Usamos o padrão lowerCamelCase igual a java.
//As variáveis são case sensitive

//Em JS temos diversos tipos de tipos de variáveis, um interessante é o object

let cachorro = {nome: "toto", raca: "Dálmata"};

cachorro.nome; //toto

//Arrays



let nomePessoas = ["Caio", "Kaua", "Serginho"];

nomePessoas[0]; //Caio
nomePessoas[2]; //Serginho


//Temos uma função chamada typeof que diz o tipo de dados que a variável guarda

typeof nomePessoas; //Array



