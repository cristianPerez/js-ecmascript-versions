/**
 * Dinamic imports.
 */

 import('./tools.js').then(module => {
  module.capitalize();
});

(async () => {
  const module = await('./tools.js');
  module.capitalize();
})();

/**
 * Import meta
 */
<script src="./tools.js" type="module"></script>
console.log(import.meta);  // { url: "file:///www/libs/tools.js" }