/**
 * It compares real null or undefined.
 */

console.log(undefined ?? 'resultado');
console.log(null ?? 'resultado');
console.log(NaN ?? 'resultado');
console.log('' ?? 'resultado');
console.log(false ?? 'resultado');
console.log(0 ?? 'resultado');

console.log(undefined || 'resultado');
console.log(null || 'resultado');
console.log(NaN || 'resultado');
console.log('' || 'resultado');
console.log(false || 'resultado');
console.log(0 || 'resultado');