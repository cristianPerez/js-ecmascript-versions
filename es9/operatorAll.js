/**
 * Operator `All` to use in a destructuring.
 * Really usefull to use in case that you need just
 * some values from one object.
 * 
 */
const obj = {
  name: 'Cristian',
  age: 30,
  country: 'CO'
};

let { country, ...all } = obj;
console.log(country);
console.log(all);