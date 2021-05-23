
const validateSubsequence = (array, sequence) => {
  let seqIndex = 0;
  let arrIndex = 0;
  while(arrIndex < array.length && seqIndex < sequence.length){
    if(array[arrIndex] === sequence[seqIndex]) seqIndex++
    arrIndex++;
  }
  
  return seqIndex === sequence.length;  
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 7, -1, 10])); //true
