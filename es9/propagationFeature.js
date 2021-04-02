/**
 * Operator ... Propagator
 * Usefull to create new objects based in
 * other objects.
 */
const obj = {
  name: 'Cristian',
  age: 30,
};

const obj1 = {
  ...obj,
  country: 'CO'
};

console.log(obj1);