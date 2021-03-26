// First solution O(n log n)
const sortedSquare = (array) => {
  array.forEach((element, index) => {
    array[index] = element * element;
  });

  array.sort((a, b) => a - b);

  return array;
};

// Two pointer solution
const sortedSquareArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  for (let index = right; index >= 0; index--) {
    if (Math.abs(arr[left]) > arr[right]) {
      result[index] = arr[left] * arr[left];
      left++;
    } else {
      result[index] = arr[right] * arr[right];
      right--;
    }
  }

  return result;
};
