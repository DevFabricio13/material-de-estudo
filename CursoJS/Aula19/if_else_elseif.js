/*
ENTRE 0 A 11 -> BOM DIA
ENTRE 12 A 17 -> BOA TARDE
ENTRE 18 A 23 -> BOA NOITE
 */

// o if significa "se";
// o else if significa "se não/senão"
// O 'ELSE' só posso utilizar uma vez na checagem/condição.
// Podemos usar condições sem o 'Else if', utilizando apenas o if e else.

const hora = 18;

    if (hora >= 0 && hora <= 11) { // ESSE CONJUNTO DE CÓDIGO, É CONSIDERADO UMA "ESTRUTURA CONDICIONAL".
        console.log('Bom dia');
     } else if (hora >= 12 && hora <= 17) {
        console.log('Boa tarde');
     } else if (hora >= 18 && hora <= 23) {
        console.log('Boa Noite');
     } else {
        console.log('Olá'); // caso a hora da const não esteja de acordo com nenhum else if acima...
     }                    // será apresentado "olá".

// o IF pode ser usado sozinho;
// sempre que utilizo else, preciso de um if antes (IF else); 
// Posso ter vários "else if" que eu quiser em uma condição/checagem;

const tenhoGrana = true; 
if (tenhoGrana) {
    console.log('Vou sair de casa');
}   else {
    console.log('Não vou sair de casa');
}
// Se o valor de 'tenhoGrana' for true, Eu vou sair de casa. Se não, Não vou sair de casa.

const tenhoDinheiro = true;

if (tenhoDinheiro) {
   console.log('Vou sair pq tenho dinheiro')
}  else {
   console.log('Não vou sair pq não tenho dinheiro');
}