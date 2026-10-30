//consoleLog.js
const boton1 = document.querySelector(".frase1");
const boton2 = document.querySelector(".frase2");
const boton3 = document.querySelector(".frase3");

/*Const + un nombre de la variable, querySelector para buscar en el html la clase con .
son 3 diferentes porque ninguna reproduce lo mismo
Nombre de la variable + .AddEvent para ejetutarce al precionar con un clic al boton
Console-log("...") dentro de la condicional para escribir en la consola*/
boton1.addEventListener("click", () => {
    console.log("Wonder Of You");
});

boton2.addEventListener("click", () => {
    console.log("The World");
});

boton3.addEventListener("click", () => {
    console.log("Made In Heaven");
});

var number1 = 10
var number2 = 15