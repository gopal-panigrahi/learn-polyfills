function chunk(array, size = 1) {
  if (Array.isArray(array) && size > 0) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % size == 0) {
        chunkedArray.push([array[i]]);
      } else {
        chunkedArray.at(-1).push(array[i]);
      }
    }
    return chunkedArray;
  } else {
    return array;
  }
}

// Examples

console.log(chunk([1, 2, 3], 0));
console.log(chunk([1, 2, 3], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(chunk([1, 2, 3], 4));
