function getDiaSemanaTexto (diaDaSemana) {
    let diaSemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
    }
} //! Switch/case não está lendo ou executando no terminal.

const data = new Date("2022-09-14 00:00:00");
const diaDaSemana = data.getDay() //* formato de um objeto date


 /*   if(diaDaSemana === 0) {
    iaSemanaTexto = 'Domingo';
    } else if(diaDaSemana === 1) {
    iaSemanaTexto = 'Segunda'
    } else if(diaDaSemana === 2) {
    iaSemanaTexto = "Terca"      
    } else if(diaDaSemana === 3) {
    iaSemanaTexto = "Quarta"
    } else {
        console.log('Não reconhecido')
    }
 console.log(diaDaSemana,iaSemanaTexto);
*/
//TODO: Dependendo do dia que estiver definido dentro do "objeto date", vai ser retornado um valor 
//TODO: de acordo com os params criados dentro do "if e else if".