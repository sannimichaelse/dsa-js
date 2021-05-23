const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const bubbleSort = (array) => {
    let swapped;
    let pass = array.length - 1; // pass in a bubble sort is n - 1, where n is the length of the array
    do {
        swapped = false;
        for(let i = 0; i<pass; i++){
            if(array[i] > array[i + 1]){
                swap(array, i, i+1);
                swapped = true;
            }
        }
    }while(swapped)

    return array;
}

