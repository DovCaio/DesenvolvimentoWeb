//Podemos usar as aspas de um tipo dentro de outra usando o \

let one = "Hello, ";
let two = "how are you?";

let tree = one + two;

tree //Hello, how are you?

//Números tem um método toString(), igual no java

//Tamanho de uma string

tree.length; //17, talvez

//Recuperar um caracter

tree[2]; //l

//Verifica se é substring

tree.indexOf("are")// se retornar um valor maior que -1, então é substring, e o número é onde essa substring começa.

//Extrair uma string