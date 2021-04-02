/**
 *  Finally implementation, in promesis.
 * 
 */

 const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  });
};

// Finally implementation
helloWorld()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizo'));