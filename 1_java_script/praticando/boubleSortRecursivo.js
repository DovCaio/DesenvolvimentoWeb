

function boubleSortRecursivo(array){

    if(!estaOrdenado(array, 0, false)){

        array = shift(array, 0, 1);
        
        array = boubleSortRecursivo(array);
    }

    return array;


}


function shift(array, indice1, indice2){

    if(array[indice1] > array[indice2]){


        let aux = array[indice1];

        array[indice1] = array[indice2];

        array[indice2] = aux;

        

    }

    let retorno;

    if(indice2 < array.length){retorno = shift(array, indice1 + 1, indice2 + 1)}
    else{retorno = array;}

    return retorno;

}

function estaOrdenado(array, i, esta){// Isso acaba deixado  complexidade igual a 2n² ao invez de n²

    let resultado;
    if(i === array.length){
        resultado = true;
    }
    else if(array[i] > array[i + 1]){

        resultado = false;


    }else{

        resultado = estaOrdenado(array, i + 1, esta);

    }

    return resultado;


}


console.log(boubleSortRecursivo([1, 4, 2, 5, 2, 5, 6, 7]));