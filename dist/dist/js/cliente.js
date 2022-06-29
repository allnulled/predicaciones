
window.$restologia = {};
window.$restologia.cliente = axios.create({baseUrl:(window.location.host.startsWith("127.0.0.1") ? window.location.href : "https://allnulled.github.io/predicacion/")});
window.$restologia.obtenerLibro = async function(hipervinculo, capitulo, versiculo) {try {const cacheado = window.$almacenamiento.obtener("URL: " + hipervinculo, false);
if((!(cacheado === false))) {
return cacheado;
}
const response = (await window.$restologia.cliente.get("books/" + hipervinculo));
window.$almacenamiento.persistir("URL: " + hipervinculo, response.data);
if(typeof capitulo === 'undefined') {
return response.data;
}
if(typeof versiculo === 'undefined') {

}} catch(error) {
console.log("Error al obtener recurso " + libro + "/" + capitulo + "/" + versiculo);
throw error;}};