console.log('hola mundo')

var misdatos=[]; 

var guardar=function(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
     
    misdatos.push({nombre:nombre2, apellido:apellido2})
    var x = misdatos.toString()   
    console.log(x)

    //localStorage.setItem('nombre',nombre)
    //localStorage.setItem('apellido',apellido)
}
var cargar = function(){
   // document.getElementById('nombre', nombre) = localStorage.getItem('nombre')
    //document.getElementById('apellido',apellido) = localStorage.getItem('apellido')
}
var limpiar = function(){

}