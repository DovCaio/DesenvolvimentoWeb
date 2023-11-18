//Temos o for

for(let passo = 0 ; passo < 5; passo++){


    console.log(passo);
}

//Temos o do while

let passo2 = 0;

do{

    console.log(passo2++);

}while(passo2 < 5)

//Temos o while do

let passo3 = 0;

while(passo3 < 5){

    console.log(passo3++);

}


//Dentro dos laços temos o break, que quebra o laço e o continue que reinicia o laço
let valor = 3

while(true){

    console.log(valor++);

    if(valor === 20){break;}


}

let pares = 0;

while (pares < 10){

    pares++;

    if((pares % 2) === 0){

        console.log(pares);

    }else{

        continue;

    }

    console.log("É um número par.")

}



//Temos uma especie de for each


let algarismosRomanos = ["I", "II", "III", "IV", "V"];


for(let indice in algarismosRomanos){ //O algorismo não é o respectivo valor, mas sim um indice


    console.log(algarismosRomanos[indice]);

}

//O verdadeiro for each é o for of

for (let algorismo of algarismosRomanos){

    console.log(algorismo);

}