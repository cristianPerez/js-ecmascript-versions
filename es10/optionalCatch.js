/**
 * Optional catch error.
 */

try {
  throw(new Error('There is an error'));
} catch {
  console.log('there is an error');
}