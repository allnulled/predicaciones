
window.$utilidades = {};
window.$utilidades.getRandomListItemFrom = function(lista) {const randomIndex = Math.floor(Math.random() * lista.length);
const randomItem = lista[randomIndex];
return [randomItem, randomIndex];};