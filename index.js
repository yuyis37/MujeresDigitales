var valor = ""
var minumero = 232
var booestado = true

var miregistro = {
    nombre:"Angie",
    apellido: "Mogollon",
    edad: 6,
    status: true,
    estudios:{
      universidad:""
    }
}
var misitems = ["juan","angie","emily"]


var pedido={
    cliente:"Angie Mogollon",
    items: [
        {codigo:"0001", nombre:"papitas", cantidad:2},
        {codigo:"0002", nombre:"gaseosa", cantidad:1}
    ]
}

var sumar = function(){
   return(5+8)
  
}

var sumar = function(a,b){
    console.log(a)
    console.log(b)
    return(a+b)
}

var calculararea = function(a,b,c=2){
    if(c==2){
        console.log('calcular area triangulo')
        return ((a+b)/c)
    }
    if(c==0){
        console.log('area cuadrado')
        return a*b
    }
    if(c==4){
        console.log('area triangulo partido por la mitad')
        return a*b/c
    }
    
}

var enviarmonedas = function(nombre, status=true){
    
    if(status == true){
        console.log(nombre + '+500monedas')
    }
    if (status == false){
        console.log(nombre + '+50monedas')
    }
    
}

var generos = []
//push agrega elementos a un array
generos.push({id:"a",age:35,estado:true})
generos.push({id:"b",age:34,estado:false})
generos.push({id:"c",age:36,estado:true})

//pop elimina el ultimo elemento registro
generos.pop()

//reverse se usa para invertir el orden de un array
//generos.reverse()

console.log(generos)

var datos = []
 datos.push("a")
 datos.push("b")
 datos.push("c")

 var datos1 = []
 datos1.push("d")
 datos1.push("e")
 datos1.push("f")
// separa cada elemento del array con un caracter
// datos.join('|')

// el .lenght sirve para ver cuantos registros tengo
//var x = datos.lenght()
console.log(datos)
// index of me permite buscar en un array y me devuelve la posicion donde lo encuentre
//datos.indexOf("c")

//Array.isArray me permite validar si un elemento es de tipo array
//var x = Array.isArray(datos)

//.fill me permite reemplazar toda la informacion de cada elemento del array
//datos.fill("default.jpg")

//concat se utiliza para unir 2 tipos de array
//var resultados = datos.concat(datos1)

//.splice se utiliza para eliminar elementos a partir de una posicion
//datos.splice(0,1)

// console.log(datos.splice(0,1))
// console.log(datos.indexOf("c"))


var a=1
var b=1
var c=2
var d=3

//if ternario
// a==b ? console.log('entro'):console.log('no entro')

var edad = "5";
var vacuna = "pfizer"
var texto = ""

//Condicional con if

// if(edad >=0 && edad <=10){
//  texto = texto + "vacuna1"
// }
// if (edad >=0 && edad <=4){
//     texto = texto + "vacuna2"
// }
// console.log(texto, "edad:" + edad + " años")


//condicional similar al IF
// switch (true) {
//     case (edad <= 4) :
//         vacuna = "vacuna 1"
//         console.log('selecionaste 0 ')
//         break;
//     case (edad >= 5 && edad <= 10):
//         vacuna = "vacuna 2"
//             console.log('selecionaste 1')
//             break;    

//     default:
//         console.log('no conincidio')
//         break;
// }

var datos = [
    {valor:100,cantidad:1,total:0},
    {valor:200,cantidad:2,total:0},
    {valor:300,cantidad:3,total:0},
    {valor:400,cantidad:4,total:0},
    {valor:500,cantidad:5,total:0}
    
];

 //forof 
// for (const i of datos) {
//     i.total = i.valor *i.cantidad
//     console.log(i)
    
// }


// for (var i = 0;  i < datos.length ; i++) {
   
// datos[i].total = datos[i].cantidad + datos[i].valor
    
// if(i==(datos.length -1)) {
 
//         console.log(datos)
//     }
// }