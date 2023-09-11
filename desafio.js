// // parte 1
// var grausFahrenheit = 77;

// var kelvin = (grausFahrenheit - 32) * (5/9) + 273.15;

// console.log(grausFahrenheit + "°F é igual a " + kelvin.toFixed(2) + "K");

// // parte 2
// var grausCelsius = 80;

// var grausFahrenheit = (grausCelsius * 9/5) + 32;

// console.log(grausCelsius + "°C é igual a " + grausFahrenheit.toFixed(2) + "°F");

// // parte 3
// var grausCelsius = 30;

// var grausFahrenheit = (grausCelsius * 9/5) + 32;

// var kelvin = grausCelsius + 273.15;

// console.log(grausCelsius + "°C é igual a " + grausFahrenheit.toFixed(2) + "°F e " + kelvin.toFixed(2) + "K");

// parte 4
var grausCelsius = parseFloat(prompt("Insira a temperatura em graus Celsius:"));

var grausFahrenheit = (grausCelsius * 9/5) + 32;

var kelvin = grausCelsius + 273.15;

console.log(grausCelsius + "°C é igual a " + grausFahrenheit.toFixed(2) + "°F e " + kelvin.toFixed(2) + "K");