nome = prompt("Qual é o seu nome?")

idade = prompt("Qual sua idade?")

anoNascimento = prompt("Em que ano você nasceu?")

anoAtual = prompt("Em que ano estamos?")

idade = Number(idade)
anoAtual = Number(anoAtual)

if (idade > 18){
    maiorIdade = true
}
else{
    maiorIdade = false
}

subtraçãoAno = 2050 - anoAtual

idadeFuturo = idade + subtraçãoAno

console.log(nome, idade, maiorIdade, idadeFuturo);
