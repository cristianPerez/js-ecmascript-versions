/**
 * We can find matchs with a regular expression.
 */

const text = 'patólogo, patóloga, pan, patógeno, pares';
const arrayFromText = text.matchAll(/lo/g);
console.log([...arrayFromText]);