function concat(array, ...args) {
  const concatArray = [...array];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      for (let e of arg) {
        concatArray.push(e);
      }
    } else {
      concatArray.push(arg);
    }
  }
  return concatArray;
}

// examples
console.log(concat([1, 2], [3, 4]));
console.log(concat([1, 2], 0));
console.log(concat([1, 2], 3, 4));
console.log(concat([1, 2], "val", 4));
