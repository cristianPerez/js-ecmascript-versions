/**
 * Transform from arrays to objects.
 * it works only with tuples.
 */

// From array to object
let entries = [["name", "oscar"], ["age", 32]];
const answerEntries = Object.fromEntries(entries);
console.log(answerEntries);

// From object to array.
let fromEntries = { name: 'Cristian', age: 30 };
const objEntries = Object.entries(fromEntries);
console.log(objEntries);