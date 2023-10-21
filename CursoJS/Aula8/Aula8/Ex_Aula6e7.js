const nome = "Francisco Venancio";
const sobrenome = "de Souza";
const idade = 69;
const peso = 68;
const altura = 1.67;
let IndiceMassaCorporal = peso / (altura * altura);
let anoNascimento = (2023 - idade); //

console.log(IndiceMassaCorporal); // 19.69
console.log(anoNascimento); // 2002
console.log(`My name is ${nome} ${sobrenome} I am ${idade} years old`);
console.log(`weigh ${peso} and am ${altura} meters tall`);
console.log(`e o meu Indice de Massa corporal é: ${IndiceMassaCorporal}`);

console.log(nome, "nasceu em:", anoNascimento);
console.log(nome, "tem", idade);
console.log(nome, "pesa", peso);

// posso utilizar o sinal de "+" também para agrupar os valores dentro do console. Ex:
console.log("My name is" + ' ' + nome + ' ' + sobrenome + ' ' + "I am" + ' ' + idade + ' ' + "years old");

// posso utilizar uma tecnica chama "Templates Strings":
console.log(`e o meu Indice de Massa corporal é: ${IndiceMassaCorporal}`);
// é usado o cifrão "$" e chaves "{}" para mostrar o valor da variavel dentro da string.





