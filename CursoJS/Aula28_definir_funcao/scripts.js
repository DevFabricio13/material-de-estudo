function imprmirNoConsole() {
    console.log('Chamando no console')
}
imprmirNoConsole();

function imprimirNumeros(num) {
    console.log('O numero é: ' + num)
}
imprimirNumeros(4);

const numerosAleatorios = function() {
    console.log(Math.random()) // é apresentado um numero aleatorio. OBJETO MATH!!!!
}
numerosAleatorios();

const soma = function(a, b) {
    return a + b;
}
    console.log(soma(10, 6));

const saudacao = function(nome) {
    if(nome == 'Fabricio') {
        return 'Olá, Fabricio'
    }
}
console.log(saudacao('Fabricio'));

const multiplicarTresNumeros = function(x,y,z) {
    return x * y * z
}
    const mult = multiplicarTresNumeros(7,9,5);
        console.log('O valor da multiplicacao é: ' + mult);

const podeDirigir = function(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log('Pode Dirigir')
    } else {
        console.log('Não pode dirigir');
    }
}
console.log(podeDirigir(18, true));

const assistencia = (n) => {  //* Arrow function, podendo alterar para uma function normal 
    const valorPorKm = 1.20;
    const valorMonetario = 300;
    const distanciaTotalRoteirizacao = 100;

    if (valorPorKm * distanciaTotalRoteirizacao <= valorMonetario) {
        console.log('Está permitido abrir assistencia')
    } else {
        console.log('Limite Excedido')
    }
}
assistencia(); //! Foi um exemplo há um calculo de roteirização de um reboque. 
