/**
 * Method to flatten all data depending of the level.
 */
let arrayNumbers = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
let deeperFlat = 2;
const arrayPlaned = arrayNumbers.flat(deepArray);
console.log(arrayPlaned);
console.log(arrayPlaned.length);
console.log(arrayPlaned[5]);


/**
 * Method flat map
 * Map each element, excecute one function and in the end
 * we can flatten the array based in the result.
 */

let arrayFlatMap = [1, 2, 3, 4, 5];
const answerFlatMap = arrayFlatMap.flatMap(value => [value, value * 2]);
console.log(answerFlatMap);