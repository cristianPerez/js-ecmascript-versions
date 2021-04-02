/**
 * Global this
 * Standard about this.
 * global, window or self
 * same sintaxis.
 */
// Nodejs
console.log(globalThis === global); // true
// Browser
console.log(globalThis === window); // true
// Web worker
console.log(globalThis === self); // true