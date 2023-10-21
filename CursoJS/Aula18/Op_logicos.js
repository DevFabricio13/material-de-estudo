/*
&& -> AND -> E = Todas as expressões precisam ser 'verdadeiras' para retornar 'true'.
|| -> OR -> OU = Todas as expressões precisam ser 'falso', caso houver true em alguma, será retornado true.
! -> NOT -> NÃO
*/ 
const expressaoAnd = true && false && true;
const expressaoOr = false || false || false || false;
    console.log(expressaoOr);

// exemplo:
const usuario = 'Fabricio';
const senha = '123456';
//                           true                   true 
    const vaiLogar = usuario === 'Fabricio' && senha === '123456';
    console.log(vaiLogar); // qualquer informação que fosse alterada, iria retornar false.