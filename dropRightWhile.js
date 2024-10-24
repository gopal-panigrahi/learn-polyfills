const identity = require("./identity");

function dropRightWhile(array, predicate = identity) {
  const result = [...array];
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      result.length = i + 1;
      return result;
    }
  }
  return result;
}

// example

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

console.log(
  dropRightWhile(users, function (o) {
    return !o.active;
  }),
);
// => objects for ['barney']
