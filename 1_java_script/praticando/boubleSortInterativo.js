

function boubleSortInterativo(array){
    let trocado = true;
    
    

    while(trocado){
        trocado = false;
        
        for(let i  = 0 ; i < array.length - 1; i++){

            if(array[i] > array[i + 1]){

                let aux = array[i];

                array[i] = array[i + 1];

                array[i + 1] = aux;

                trocado = true
            }


        }


    }

    return array;

}

let ordenado = boubleSortInterativo([3, 1, 25, 5, 1, 62, 2]);

console.log(ordenado);