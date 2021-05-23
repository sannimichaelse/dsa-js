

const insertionSort = (array) => {

    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
        while (j >= 0 && array[j] > key){
            array[j + 1] = array[j]
            j = j - 1;
        }

        array[j + 1]  = key;
    }

    return array;
}

console.log(insertionSort([12, 11, 13, 5, 6]))