// a) Converter libra (lb) para quilograma (kg)
var libras = 20;
var quilogramas = libras * 0.45359237;
console.log(libras + "lb equivalem a " + quilogramas.toFixed(2) + "kg");

// b) Converter onça (oz) para quilograma (kg)
var oncas = 10.5;
var quilogramasOz = oncas * 0.0283495231;
console.log(oncas + "oz equivalem a " + quilogramasOz.toFixed(2) + "kg");

// c) Converter milha (mi) para metro (m)
var milhas = 100;
var metros = milhas * 1609.34;
console.log(milhas + "mi equivalem a " + metros.toFixed(2) + "m");

// d) Converter pés (ft) para metro (m)
var pes = 50;
var metrosFt = pes * 0.3048;
console.log(pes + "ft equivalem a " + metrosFt.toFixed(2) + "m");

// e) Converter galão (gal) para litro (l)
var galoes = 103.56;
var litros = galoes * 3.78541;
console.log(galoes + "gal equivalem a " + litros.toFixed(2) + "l");

// f) Converter xícara (xic) para litro (l)
var xicaras = 450;
var litrosXic = xicaras * 0.24;
console.log(xicaras + " xic equivalem a " + litrosXic.toFixed(2) + "l");

// g) Solicitar ao usuário que insira a quantidade de milhas a serem convertidas
var milhas = parseFloat(prompt("Insira a quantidade de milhas (mi) que deseja converter para metros (m):"));

var metros = milhas * 1609.34;

console.log(milhas + "mi equivalem a " + metros.toFixed(2) + "m");
