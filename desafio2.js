const custoPorKWh = 0.05;

var quilowattsConsumidos = parseFloat(prompt("Insira a quantidade de quilowatt-hora consumidos pela residência:"));

var valorSemDesconto = quilowattsConsumidos * custoPorKWh;

console.log("Valor a ser pago sem desconto: R$" + valorSemDesconto.toFixed(2));

// -------------------------------------------------------------------------------------------------

var descontoPercentual = parseFloat(prompt("Insira a porcentagem de desconto (0 para nenhum desconto, 15 para 15% de desconto, etc.):"));

var valorComDesconto = valorSemDesconto * (1 - descontoPercentual / 100);

console.log("Valor a ser pago com " + descontoPercentual + "% de desconto: R$" + valorComDesconto.toFixed(2));
