function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array?.length ?? 0; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}

console.log(compact([0, 1, false, 2, "", 3]));
console.log(compact([0, 3, Boolean(10 < 9), 2, NaN, 3]));
console.log(compact());
