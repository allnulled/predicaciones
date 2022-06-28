
const noop = function() {return {};};
const propiedadesDeControl = {onChange:{type:Function, default:noop}, label:{type:String, default:""}, placeholder:{type:String, default:""}, defaultValue:{type:String, default:""}, generalClasses:{type:String, default:""}, labelClasses:{type:String, default:""}, inputClasses:{type:String, default:""}, onClick:{type:Function, default:noop}};
const datosDeControl = function(scope) {return {internalValue:scope.defaultValue, internalOnChange:scope.onChange, internalLabel:scope.label, internalGeneralClasses:scope.generalClasses, internalLabelClasses:scope.labelClasses, internalInputClasses:scope.inputClasses, internalPlaceholder:scope.placeholder, internalOnClick:scope.onClick};};
const watchersDeControl = {internalValue:function(v) {this.internalOnChange(v, this);}};
window.$prerrequisitos = {noop, propiedadesDeControl, datosDeControl, watchersDeControl};