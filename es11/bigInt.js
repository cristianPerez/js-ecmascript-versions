/**
 * Max int number in js currently is 9007199254740991
 * adding one n int he end of the number we can add more numbers.
 */

let nMax = Number.MAX_SAFE_INTEGER;
console.log(nMax); // 9007199254740991
nMax++;
console.log(nMax); // 9007199254740991
let nMore = 9007199254740991n;
console.log(nMore); // 9007199254740991n
nMore++;
console.log(nMore); // 9007199254740992n
nMore++;
console.log(nMore); // 9007199254740993n