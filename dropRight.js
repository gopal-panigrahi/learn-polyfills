function dropRight(array, n = 1) {
  const result = [];
  for (let i = 0; i < array.length - n; i++) {
    result.push(array[i]);
  }
  return result;
}

// examples
console.log(dropRight([1, 2, 3]));
// => [1, 2]

console.log(dropRight([1, 2, 3], 2));
// => [1]

console.log(dropRight([1, 2, 3], 5));
// => []

console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]
