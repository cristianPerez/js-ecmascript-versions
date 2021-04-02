/**
 * We can generate one matrix 
 * based in and object.
 * the magic sintax is Object.entries({ data });
 */

const data = {
  frontend: 'oscar',
  backend: 'Cristian'
};

const matrix = Object.entries(data);

console.log(matrix);
console.log(matrix.length);

