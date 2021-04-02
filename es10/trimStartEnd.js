/**
 * String better improvements.
 */


let hello = '        hello world  ';
console.log(hello);
console.log(hello.trimStart());


let helloTwo = '        hello world  ';
console.log(helloTwo);
console.log(helloTwo.trimEnd().trimStart());