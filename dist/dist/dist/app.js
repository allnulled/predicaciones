
// [castelog:empaquetables] "./js/api-nativa.js"

// [castelog:empaquetables] "./js/almacenamiento.js"

// [castelog:empaquetables] "./js/traducciones.js"

// [castelog:empaquetables] "./js/notificaciones.js"

// [castelog:empaquetables] "./js/cliente.js"

// [castelog:empaquetables] "./js/prerrequisitos.js"

// [castelog:empaquetables] "./js/urls.js"

// [castelog:empaquetables] "./js/utilidades.js"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"predicaciones-app","version":"1.0.0","contenido":{"head":"<head>\n    <title>Predicaciones</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />\n    <link rel=\"stylesheet\" href=\"styles/fonts/Roboto/Roboto-Regular.ttf\" type=\"font/ttf\" />\n    <link rel=\"stylesheet\" href=\"styles/reset.css\" />\n    <link rel=\"stylesheet\" href=\"styles/framework.css\" />\n    <link rel=\"stylesheet\" href=\"styles/app.css\" />\n    <link rel=\"stylesheet\" href=\"styles/theme.css\" />\n    <link rel=\"stylesheet\" href=\"styles/custom.css\" />\n</head>","body":"<body>\n    <div id=\"app\"></div>\n</body>"}}

const { noop, propiedadesDeControl, datosDeControl, watchersDeControl } = window.$prerrequisitos;
const $URLs = window.$urls;
const $Recursos = ((Object.keys($URLs.Recursos))).map(function(recursoIndex) {const recurso = $URLs.Recursos[recursoIndex];
return {idOriginal:recursoIndex, id:$URLs.traduceRecurso(recurso).replace(new RegExp("^neto\/", "g"), "").replace(new RegExp("\/", "g"), "\: ").replace(new RegExp("\.json", "g"), "").replace(new RegExp("_", "g"), " "), hipervinculo:recurso};});
$Recursos.findById = function(id) {let resultado = undefined;
for(item of $Recursos) {
if(item.idOriginal === id) {
resultado = item;
}}

return resultado;};
const Card = Castelog.metodos.un_componente_vue2("Card", "<div class=\"Card\" :class=\"internalGeneralClasses\">\n        <slot></slot>\n    </div>", function(component) {return {props:{...(propiedadesDeControl)}, data:function() {return {...(datosDeControl(this))};}, watch:{...(watchersDeControl)}};}, null);
const ControlForText = Castelog.metodos.un_componente_vue2("ControlForText", "<div class=\"ControlForText\" :class=\"internalGeneralClasses\">\n        <div v-if=\"internalLabel\" :class=\"internalLabelClasses\">{{ $t(internalLabel) }}</div>\n        <input type=\"text\" :class=\"internalInputClasses\" v-model=\"internalValue\" />\n    </div>", function(component) {return {props:{...(propiedadesDeControl)}, data:function() {return {...(datosDeControl(this))};}, watch:{...(watchersDeControl)}};}, null);
const ControlForPassword = Castelog.metodos.un_componente_vue2("ControlForPassword", "<div class=\"ControlForPassword\" :class=\"internalGeneralClasses\">\n        <div v-if=\"internalLabel\" :class=\"internalLabelClasses\">{{ $t(internalLabel) }}</div>\n        <input type=\"password\" :class=\"internalInputClasses\" v-model=\"internalValue\" />\n    </div>", function(component) {return {props:{...(propiedadesDeControl)}, data:function() {return {...(datosDeControl(this))};}, watch:{...(watchersDeControl)}};}, null);
const ControlForButton = Castelog.metodos.un_componente_vue2("ControlForButton", "<div class=\"ControlForButton\" :class=\"internalGeneralClasses\">\n        <button type=\"button\" :class=\"internalInputClasses\" v-on:click=\"internalOnClick\">\n            <slot></slot>\n        </button>\n    </div>", function(component) {return {props:{...(propiedadesDeControl)}, data:function() {return {...(datosDeControl(this))};}, watch:{...(watchersDeControl)}};}, null);
const Horizontally = Castelog.metodos.un_componente_vue2("Horizontally", "<table class=\"width_100x100\">\n        <tbody>\n            <tr>\n                <slot></slot>\n            </tr>\n        </tbody>\n    </table>", function(component) {return {props:{...(propiedadesDeControl)}, data:function() {return {...(datosDeControl(this))};}, watch:{...(watchersDeControl)}};}, null);
const TitleOfPage = Castelog.metodos.un_componente_vue2("TitleOfPage", "<div class=\"TitleOfPage\">\n        <h3 class=\"padding_2 text_align_right\"><slot></slot></h3>\n    </div>", null, null);
const LanguageSelector = Castelog.metodos.un_componente_vue2("LanguageSelector", "<div class=\"LanguageSelector text_align_right\">\n        <Horizontally>\n            <td class=\"width_1x100\">\n                <span>{{ $t(\"Idioma:\") }}</span>\n            </td>\n            <td class=\"width_100x100\">\n                <select v-model=\"selected_language\">\n                    <option value=\"es\">Español</option>\n                    <option value=\"ca\">Català</option>\n                    <option value=\"en\">English</option>\n                </select>\n            </td>\n        </Horizontally>\n    </div>", function(component) {return {data:function() {return {selected_language:""};}, watch:{selected_language:function(nuevoValor) {this.$almacenamiento.persistir("preferences.user.language", nuevoValor);
this.$i18n.i18next.changeLanguage(nuevoValor);}}, mounted:function() {this.selected_language = this.$almacenamiento.obtener("preferences.user.language", this.$i18n.i18next.language);}};}, null);
const Notificaciones = Castelog.metodos.un_componente_vue2("Notificaciones", "<div class=\"Notificaciones\">\n        \n    </div>", function(component) {return {data:function() {return {notifications:[]};}, methods:{}};}, null);
const Topbar = Castelog.metodos.un_componente_vue2("Topbar", "<div class=\"Topbar\">\n        <Horizontally>\n            <td class=\"width_1x100 padding_2\">\n                <ControlForButton input-classes=\"padding_2\" :on-click=\"toggleNavigation\">Inicio</ControlForButton>\n            </td>\n            <td class=\"width_100x100 text_align_right padding_0 padding_right_2\">\n                <h2 style=\"text-shadow: 0 0 1px white; color: white;\">{{ $t(\"Predicaciones\") }}</h2>\n            </td>\n        </Horizontally>\n    </div>", function(component) {return {data:function() {return {};}, methods:{toggleNavigation:function() {this.$router.history.push("/");}}};}, null);
const BackButton = Castelog.metodos.un_componente_vue2("BackButton", "<div class=\"BackButton\" :class=\"internalGeneralClasses\">\n        <ControlForButton input-classes=\"width_auto\" :on-click=\"goToRouteUp\" >{{ $t(\"Atrás\") }}</ControlForButton>\n    </div>", function(component) {return {props:{generalClasses:{type:String, default:""}}, data:function() {return {internalGeneralClasses:this.generalClasses};}, methods:{goToRouteUp:function() {let partesDeRuta = this.$route.path.split("/");
if(partesDeRuta.length === 5 && partesDeRuta[1] === "lectura") {
partesDeRuta.splice(3, 2);
}
partesDeRuta.pop();
let nuevaRuta = partesDeRuta.join("/");
if(nuevaRuta === "") {
nuevaRuta = "/home";
}
this.$router.history.push(nuevaRuta);}}};}, null);
const HomePage = Castelog.metodos.un_componente_vue2("HomePage", "<div class=\"HomePage\">\n        <TitleOfPage>\n            <Horizontally>\n                <td class=\"width_auto\"><ControlForButton :on-click=\"goToLecturas\">Lecturas</ControlForButton></td>\n                <td class=\"width_auto\"><BackButton general-classes=\"visibility_hidden\" /></td>\n                <td class=\"width_100x100\">{{ $t(\"Inicio\") }}</td>\n            </Horizontally>\n        </TitleOfPage>\n        <hr />\n        <div class=\"padding_2\">\n            <div>\n                <b>Predicaciones</b> es una aplicación para poder acceder a algunas de las lecturas más sagradas de las religiones o credos principales del mundo como son:\n            </div>\n            <ul>\n                <li> · Ciencia</li>\n                <li> · Derecho</li>\n                <li> · Hinduismo</li>\n                <li> · Budismo</li>\n                <li> · Taoismo</li>\n                <li> · Islamismo</li>\n                <li> · Judaismo</li>\n                <li> · Cristianismo</li>\n            </ul>\n            <hr class=\"margin_vertical_2\" />\n            <div>Y la conclusión es que en verdad, yo era Dios, y me hice este jueguecito para pasar un ratillo. Así que dejaos de tonterías, y dadme de comer, u os arrepentiréis.</div>\n        </div>\n    </div>", function(component) {return {methods:{goToLecturas:function() {this.$router.history.push("/lectura");}}};}, null);
const LecturaLibrosPage = Castelog.metodos.un_componente_vue2("LecturaLibrosPage", "<div class=\"LecturaLibrosPage\">\n        <TitleOfPage>\n            <Horizontally>\n                <td class=\"width_auto\"><BackButton /></td>\n                <td class=\"width_100x100\">{{ $t(\"Lectura aleatoria\") }}</td>\n            </Horizontally>\n        </TitleOfPage>\n        <hr />\n        <div class=\"padding_2\">\n            <div>Fuentes disponibles:</div>\n            <div class=\"padding_top_1\" v-for=\"(recurso, recursoIndex) in recursos\" v-bind:key=\"'recurso-' + recursoIndex\">\n                <ControlForButton :on-click=\"() => abrirLectura('/lectura/' + recurso.idOriginal)\">\n                    {{ recurso.id }}\n                </ControlForButton>\n            </div>\n        </div>\n    </div>", function(component) {return {data:function() {return {recursos:$Recursos};}, methods:{abrirLectura:function(url) {this.$router.history.push(url);}}};}, null);
const LecturaPage = Castelog.metodos.un_componente_vue2("LecturaPage", "<div class=\"LecturaPage\">\n        <TitleOfPage>\n            <Horizontally>\n                <td class=\"width_auto\"><BackButton /></td>\n                <td class=\"width_auto\"><ControlForButton :on-click=\"refrescarFraseAleatoriamente\">Aleatorio</ControlForButton></td>\n                <td class=\"width_100x100\" v-if=\"!$route.params.chapter\">{{ $t(\"Lectura\") }}</td>\n                <td class=\"width_100x100\" v-else>{{ $t(\"Consulta\") }}</td>\n            </Horizontally>\n        </TitleOfPage>\n        <hr />\n        <div class=\"padding_2\" v-if=\"detalles && frase\">\n            <table>\n                <tbody>\n                    <tr>\n                        <td></td>\n                        <td class=\"width_100x100 padding_2 text_align_center\" colspan=\"3\"><span class=\"font_weight_bold\">Libro: </span><span>{{ detalles.libro }}</span></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                    </tr>\n                    <tr>\n                        <td><ControlForButton general-classes=\"button_to_move_reading\" :on-click=\"() => moveTo('anterior','capitulo')\" v-if=\"detalles.capitulo !== 0\"> « </ControlForButton></td>\n                        <td class=\"width_100x100 padding_2 text_align_center\" colspan=\"3\"><span>Capítulo: </span><span>{{ detalles.capitulo + 1 }}</span></td>\n                        <td><ControlForButton general-classes=\"button_to_move_reading\" :on-click=\"() => moveTo('posterior','capitulo')\" v-if=\"detalles.capitulo < (libro.length - 1)\"> » </ControlForButton></td>\n                    </tr>\n                    <tr>\n                    </tr>\n                    <tr>\n                        <td><ControlForButton general-classes=\"button_to_move_reading\" :on-click=\"() => moveTo('anterior','versiculo')\" v-if=\"detalles.versiculo !== 0\"> « </ControlForButton></td>\n                        <td class=\"width_100x100 padding_2 text_align_center\" colspan=\"3\"><span>Versículo: </span><span>{{ detalles.versiculo + 1 }}</span></td>\n                        <td><ControlForButton general-classes=\"button_to_move_reading\" :on-click=\"() => moveTo('posterior','versiculo')\" v-if=\"detalles.versiculo < (libro[detalles.capitulo].length - 1)\"> » </ControlForButton></td>\n                    </tr>\n                    <tr>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div style=\"background-color: #222; color: white; text-shadow: 0 0 0px white;\" v-if=\"frase\">\n            <hr class=\"margin_vertical_2\" />\n            <div class=\"padding_2 padding_top_0\" style=\"font-size: 14px;\">\n                {{ frase.substr(0,1).toUpperCase() + frase.substr(1) }}\n            </div>\n            <div class=\"padding_2\" style=\"position: fixed; top: auto; left: 0px; bottom: 0px; right: auto;\">\n                <ControlForButton :on-click=\"() => moveTo('anterior','versiculo', true)\" v-if=\"!((detalles.capitulo === 0) && (detalles.versiculo === 0))\">Volver</ControlForButton>\n            </div>\n            <div class=\"padding_2\" style=\"position: fixed; top: auto; left: auto; bottom: 0px; right: 0px;\">\n                <ControlForButton :on-click=\"() => moveTo('posterior','versiculo', true)\" v-if=\"(!((detalles.capitulo >= (libro.length - 1)) && (detalles.versiculo >= (libro[detalles.capitulo].length - 1))))\">Seguir</ControlForButton>\n            </div>\n        </div>\n    </div>", function(component) {return {data:function() {const detalles = (typeof this.$route.params.chapter === 'undefined' ? this.$almacenamiento.obtener("Libro: " + this.$route.params.book, {}) : {});
return {recurso:$Recursos.findById(this.$route.params.book), frase:undefined, detalles:detalles, frases:undefined, libro:undefined};}, watch:{$route:async function(nuevoValor) {try {(await this.refrescarDatosPorURL());} catch(error) {
console.log(error);}}}, methods:{refrescarDatosPorURL:async function() {try {if((!(typeof this.$route.params.chapter === 'undefined')) && (!(typeof this.$route.params.verse === 'undefined'))) {
this.recurso = $Recursos.findById(this.$route.params.book);
console.log(this.recurso);
if(typeof this.detalles === 'undefined') {
this.detalles = {};
}
this.detalles.libro = this.recurso.id;
this.libro = (await this.$rest.obtenerLibro(this.recurso.hipervinculo));
this.detalles.capitulo = (parseFloat(this.$route.params.chapter)) - 1;
this.detalles.versiculo = (parseFloat(this.$route.params.verse)) - 1;
(await this.refrescarFrase());
}} catch(error) {
console.log(error);}}, moveTo:async function(sentido, parte, forzar = false) {if(sentido === "anterior" && parte === "capitulo") {
if(this.detalles.capitulo > 0) {
this.detalles.capitulo -= 1;
this.detalles.versiculo = 0;
}
}
else if(sentido === "anterior" && parte === "versiculo") {
if(this.detalles.versiculo > 0) {
this.detalles.versiculo -= 1;
}
else if(forzar === true) {
if((!(this.detalles.capitulo === 0))) {
this.detalles.capitulo -= 1;
this.detalles.versiculo = this.libro[this.detalles.capitulo].length - 1;
}}}
else if(sentido === "posterior" && parte === "capitulo") {
if(this.detalles.capitulo < (this.libro.length - 1)) {
this.detalles.capitulo += 1;
this.detalles.versiculo = 0;
}}
else if(sentido === "posterior" && parte === "versiculo") {
if(this.detalles.versiculo < (this.libro[this.detalles.capitulo].length - 1)) {
this.detalles.versiculo += 1;
}
else if(forzar === true) {
if(this.detalles.capitulo < (this.libro.length - 1)) {
this.detalles.capitulo += 1;
this.detalles.versiculo = 0;
}}}
return (await this.refrescarFrase());}, obtenerLibro:function() {return this.$rest.obtenerLibro(this.recurso.hipervinculo);}, refrescarFrase:async function() {try {if(typeof this.libro === 'undefined') {
this.libro = (await this.obtenerLibro());
this.detalles.libro = this.recurso.id;
}
if(typeof this.detalles.capitulo === 'undefined') {
const [ capitulo, indexCapitulo ] = $utilidades.getRandomListItemFrom(this.libro);
this.detalles.capitulo = indexCapitulo;
}
if(typeof this.detalles.versiculo === 'undefined') {
const [ versiculo, indexVersiculo ] = $utilidades.getRandomListItemFrom(this.libro[this.detalles.capitulo]);
this.detalles.versiculo = indexVersiculo;
}
this.frase = this.libro[this.detalles.capitulo][this.detalles.versiculo];
if(typeof this.$route.params.chapter === 'undefined') {
this.$almacenamiento.persistir("Libro: " + this.$route.params.book, this.detalles);
}} catch(error) {
console.log(error);}}, refrescarFraseAleatoriamente:async function(hipervinculo) {try {if(typeof this.libro === 'undefined') {
this.libro = (await this.obtenerLibro());
}
this.detalles = {libro:this.recurso.id, capitulo:undefined, versiculo:undefined};
return (await this.refrescarFrase());} catch(error) {
console.log(error);}}}, mounted:async function() {try {this.refrescarDatosPorURL();
if(typeof this.detalles === 'undefined') {
this.detalles = {};
}
if(typeof this.detalles.libro === 'undefined') {
this.detalles.libro = this.recurso.id;
}
if(typeof this.detalles.capitulo === 'undefined') {
this.detalles.capitulo = 0;
}
if(typeof this.detalles.versiculo === 'undefined') {
this.detalles.versiculo = 0;
}
(await this.refrescarFrase());} catch(error) {
console.log(error);}}};}, null);
const routes = [{name:"LecturaConsultada", path:"/lectura/:book/:chapter/:verse", component:LecturaPage}, {name:"Lectura", path:"/lectura/:book", component:LecturaPage}, {name:"LecturaLibrosPage", path:"/lectura", component:LecturaLibrosPage}, {name:"Inicio", path:"/home", component:HomePage, alias:"/"}];
Vue.prototype.$rest = window.$restologia;
Vue.prototype.$almacenamiento = window.$almacenamiento;
Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App\">\n        <Topbar />\n        <hr />\n        <div class=\"main_contents_container padding_vertical_2\">\n            <div class=\"main_contents\">\n                <router-view></router-view>\n            </div>\n        </div>\n        <Notificaciones ref=\"Notificaciones\" />\n    </div>",
  function(component) {return {name:"App", data:function() {return {metadata:{project:"Predicaciones"}};}, beforeMount:function() {Vue.prototype.$root = this;
Vue.prototype.$notificaciones = new window.$Notificaciones(this.$refs.Notificaciones);}};},
  ".app {}\n", null,
  routes,
  window.$translations,
  "#app");