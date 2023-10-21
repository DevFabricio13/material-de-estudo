function saudacao(nome) { // dentro dos parenteses, é criado um "PARAMETRO"
    return `Good morning ${nome}!`
}
const variavel = saudacao('Fabricio');
    console.log(variavel);

function matematica(a, b) {
    return a / b
}
    console.log(matematica(800, 450));

    // uma segunda opção de utilizar o function;
function calculo(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(calculo(85, 9));

// outro maneira:
const raiz = (n) => {  // O "=>" também é uma function;
    return n ** 0.5
}
    console.log(raiz(9));
    console.log(raiz(6));

// const raiz = n => n ** 0.5; é uma maneira simplificada de uma função. Para facilitar a vida do programador.