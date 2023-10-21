console.log(5 > 6 ? 'É sim' : 'É não');

// ? e : são considerados operadores ternários

const num1 = 6;
const num2 = 7;
const res = num1 >= num2;

const test = 10;
const test1 = 5;
const ras = test >= test1

    console.log(res >= ras ? 'Res é maior' : 'Res é menor');

function soma(a, b) {
    return a + b
}
    console.log(soma(15, 8));

function mult(c, d) {
    return c * d
}
    console.log(mult(5, 5));

console.log(soma >= mult ? 'Soma é maior' : 'A soma é menor');