const productsOfArray = (array) => {
  let left_products = [];
  let right_products = [];
  let output_array = [];
  let N = array.length;

  left_products[0] = 1;
  right_products[N - 1] = 1;

  for (let i = 1; i < N; i++) {
    left_products[i] = array[i - 1] * left_products[i - 1];
  }

  for (let k = N - 2; k >= 0; k--) {
    right_products[k] = array[k + 1] * right_products[k + 1];
  }

  for (let j = 0; j < N; j++) {
    output_array[j] = left_products[j] * right_products[j];
  }

  return output_array;
};
