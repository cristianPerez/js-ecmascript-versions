/**
 * Using Promise.all if any promise fails
 * just stop all process, width  Promise.allSettled
 * does not stops, just contunues and in the end 
 * just show up an array, with the answers.
 */

// Promise.all
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);
const arrayPromise = [promise1, promise2, promise3];

Promise.all(arrayPromise)
  .then(result => console.log('OK', result))
  .catch(err => console.log('ERROR', err));
/*
    ERROR 3
    Script snippet %2340:1 Promise {<fulfilled>: undefined}
*/

Promise.allSettled(arrayPromise)
  .then(result => console.log('OK', result))
  .catch(err => console.log('ERROR', err));
/*
    OK
    0: {status: "fulfilled", value: 1}
    1: {status: "fulfilled", value: 2}
    2: {status: "rejected", reason: 3}
*/