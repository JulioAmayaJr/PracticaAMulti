//push(): Agrega uno o mas elementos al final del array
let numeros = [1,2,3];
numeros.push(4,5);
console.log(numeros);

//pop(): Elimina y devuelve el ultimo elemento del array
let frutas=["manzana","banana","uva"];
let ultimaF=frutas.pop();
console.log(ultimaF);
console.log(frutas);

//unshift(): Agrega uno o mas elementos al incio del array
let colores = ["verde","amarillo"];
colores.unshift("azul","blanco");
console.log(colores);

//shift(): elimina  devuelve el primer elemento
let paises = ["El salvador","Peru","Mexico"];
let primerP = paises.shift();
console.log(primerP);
console.log(paises);

//concat(): Combina dos o mas arrays para crear un nuevo array
let arr1=[1,2];
let arr2=[3,4];
let combineArray=arr1.concat(arr2);
console.log(combineArray);

//slice(): Crea una copia superficial (shallow copy) del array con elementos selecionados
let ArrayOriginal=[1,2,3,4,5];
let copiaArray=ArrayOriginal.splice(1,4);
console.log(copiaArray);

//splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos
let Frutas=["manzana","banana","kiwi","Pera","Naranja"];
let removerFrutas=Frutas.splice(2,1,"uva");
console.log(Frutas);
console.log(removerFrutas);

//forEach(): Ejecuta una funcion para cada elemento del array
let numbers = [1,2,3];
numbers.forEach(function (number){
    console.log(number*2);
})
const product=[
    {name:"Camisa", precio: 20},
    {name:"Jeans", precio: 25},
    {name:"Zapatos", precio: 80},
    {name:"Sombrero", precio: 10}
]

let precioTotal=0;
product.forEach(function(produc){
    precioTotal+=produc.precio
});
console.log("Precio total: "+precioTotal);

//map(): Crea un nuevo array aplicando una funcion a cada elemento del array original
let numbers1=[1,2,3];
let nuevoArreglo=numbers1.map(function(number){
    return number*2
})
console.log(nuevoArreglo);

const Gcelcius=[0,15,30,5,10];
const GFarengeith=Gcelcius.map(function(c){
    return (c* 9/5)+32;
})
console.log("Grados celcius: "+Gcelcius);
console.log("Grados Farenheith: "+GFarengeith);

//filter(): Crea un nuevo array con todos los elementos que pasas una prueba (funcion proporcionada)

//Ejercicio 1
const num=[2,8,3,6,10,4,7];
const num2=num.filter(function(num){
    return num > 5
})
console.log(num2);

//Ejercicio 2
const personas=[
    {nombre:"Yancy",edad: 24},
    {nombre: "Jose",edad: 45},
    {nombre: "Luciana",edad: 30},
    {nombre: "Kevin",edad: 15},
    {nombre:"Plutarca",edad: 20}
]

const adultos=personas.filter(function(person){
    return person.edad>18
})
console.log(adultos);

//reduce(): Aplica una funcion a un acumulador y a cada elemento de una arreglo (De izquierda a derecha)para reducirlo a un solo valor
let nums=[1,2,3,4];
let sum=nums.reduce(function(acumulador,valorActual){
    return acumulador+ valorActual
},0)

console.log(sum);

//every(): Comprueba si todos los elementos de un arreglo cumplen una condicion dada y devuelve true o false 
let number=[1,2,3,4,5];
let mayorCero=number.every(function(num){
    return num>0
})
console.log(mayorCero);


//sort(): Ordena los elementos de un arreglo en ordeb alfabetico (sin crear un nuevo arreglo)
let nombres=["Margarita","Alberto","Cesia","Santiago","Zuleima"];
nombres.sort();
console.log(nombres);



