const moveElementToTheEnd = (array) => {

    let count = 0;
    let arrLen = array.length;

    // If element is not equals to zero move them to the front and increment count;
    for(let k = 0; k<arrLen; k++){
        if(array[k] != 0){
            array[count++] = array[k]
        }
    }

    // While count is less then length, add zeros to the array
    while(count < arrLen){
        array[count++] = 0;
    }

    return array;

}