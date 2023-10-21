// ? : -> SÃO OS OPERADORES TERNÁRIOS;

// const pontuacaoUsuarios = 700;
// TIPO 1:
/* if (pontuacaoUsuarios >= 100 && pontuacaoUsuarios <= 500) {
    console.log("Usuário VIP")
} else if (pontuacaoUsuarios >= 501 && pontuacaoUsuarios <= 800) {
    console.log("Usuário Premium")
} else if (pontuacaoUsuarios >= 801 && pontuacaoUsuarios <= 1000) {
    console.log("Usuário Diamante")
}
*/

// TIPO 2:
/* if (pontuacaoUsuarios >= 700) {
    console.log('Usuário Normal')
} else {
    console.log('Usuário Desconhecido')
}
*/
// UTILIZANDO OS OPERADORES TERNARIOS:
    const pontuacaoUsuarios = 1000;
    const nivelUsuario = pontuacaoUsuarios <= 800 ? 'Usuario VIP' : 'Usuario Normal';
        console.log(nivelUsuario);
    
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'; ESSA É A OPERAÇÃO TERNARIA.
