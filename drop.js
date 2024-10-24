function drop(array, n = 1) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= n) {
      result.push(array[i]);
    }
  }
  return result;
}

// examples
console.log(drop([1, 2, 3]));
// => [2, 3]

console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]
