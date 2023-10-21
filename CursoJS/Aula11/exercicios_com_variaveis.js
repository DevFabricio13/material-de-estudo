let varA = "A";  // B
let varB = "B";  // C
let varC = "C";  // A

const varATEMP = varA; // criei uma variavel constante "temporaria". MUITO IMPORTATEEEE!!!!!
varA = varB;
varB = varC;
varC = varATEMP;

console.log(varA, varB, varC);


