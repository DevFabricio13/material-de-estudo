// AULA COM METODOS E MANEIRAS DIFERENTES PARA CRIAR DADOS/INFO DE PESSOAS;

const pessoa = {  // "{}" chaves é considerado um OBJETO literal;
    nome: 'Fabricio',
    sobreNome: 'Ribeiro',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobreNome} está falando um oi...`); // this se refere ao objeto (pessoa) que está na constante.
    }
};   // este metodo é mais utilizado para deixar o codigo mais bonito;
pessoa.fala();

function criaPessoa (nome1, sobreNome1, age) { // essa function abaixo, é conhecida como uma "FACTORY";
    return {
        nome1,
        sobreNome1,
        age
   };     
}
const pessoa1 = criaPessoa('Henrique', 'Vasconcelos', 23);
console.log(pessoa1);




const dados = {
    id: 3596,
    cpf: 23091130851,
    cnpj: 58791469218,

    fala() {
        console.log(`Meu id é: ${this.id}, o meu cpf ${this.cpf} e por fim o meu cnpj é ${this.cnpj}.`)
    }
};
dados.fala();