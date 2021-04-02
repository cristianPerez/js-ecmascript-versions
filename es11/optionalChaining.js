/**
 * New sintax to access in any property in any level of objects
 * or arrays, widthout worri about id the data existe or not.
 * If the value does not exists return an undefined.
 */

const data = {
  nombre: 'aaaa',
  estudios: [
    {
      curso: 'qqq',
      nota: 10
    },
    {
      curso: 'www',
      nota: 9
    }
  ],
  getNombre() {
    return this.nombre;
  },
  experiencia: ['pppp', 'oooo', 'iiii'],
};
console.log(data?.nombre);                   // aaaa
console.log(data?.nombre2);                  // undefined
console.log(data?.estudios?.[0]);            // { curso: "qqq", nota: 10 }
console.log(data?.estudios?.[3]);            // undefined
console.log(data?.estudios2?.[0]);           // undefined
console.log(data?.estudios?.[0]?.curso);     // qqq
console.log(data?.estudios?.[0]?.nota);      // 10
console.log(data?.estudios?.[0]?.nota2);     // undefined
console.log(data?.getNombre?.());            // aaaa
console.log(data?.getNombre2?.());           // undefined
console.log(data?.experiencia?.[0]);         // pppp
console.log(data?.experiencia?.[10]);        // undefined
console.log(data?.experiencia2?.[0]);        // undefined

console.log(data?.estudios?.[0]?.curso);