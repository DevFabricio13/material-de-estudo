// A DIFERENCA ENTRE ELA E O LET, É QUE O CONST NÃO PODE SER MODIFICADO;
// CONSTANTES PRECISA TER NOMES SIGNIFICATIVOS;
// NÃO PODE INICIAR UMA CONSTANTE COM NÚMEROS;
// NÃO UTILIZE VAR. UTILIZE CONST;

const nome = "Fabrício";
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = "15";
const conta = primeiroNumero * segundoNumero;
const contaDuplicado = conta * 2;               // duplicar o valor;
const contaTriplicada = conta * 2 + 5;
console.log(contaTriplicada);  // dentro do parenteses é o valor que eu quero executar;
// posso escolher qualquer variavel ou constante e inserir dentro do parenteses e adquirir  o resultado;

const rebelde = ("Meu nome é 'Fabricio'. E estou aprendendo JavaScript às", 12, "da manhã.");
console.log(rebelde); // String + Number, não funcionam na variavel "let" e "constante";
console.log("Meu nome é 'Fabricio'. E estou aprendendo JavaScript às", 12, "da manhã.");
// String + Number só funciona dentro do console.log;

console.log(typeof(primeiroNumero + segundoNumero));
// resultado da expressão dentro dos parenteses é uma string.







