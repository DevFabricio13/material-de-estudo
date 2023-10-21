// arrays pode ser utilizado como uma lista de nomes;
// pode conter numeros dentro das arrays também;
// posso inserir qualquer coisa, funções, null...;
//               0           1      2         3 ...
const alunos = ['Fabricio', 'Ana', 'Beatriz', 2]; 

        alunos.push('Monica'); // o unshift adiciona no começo da array;
        alunos.push('Veronica'); //  o push é utilizado para adicionar uma array no final;
        alunos[4] = 'Vinicius'; // um metodo que posso adicionar mais um item dentro da array;
     console.log(typeof(alunos));
        console.log(alunos instanceof Array);
        const removido = alunos.pop(); // remove o ultimo
        // const removido = alunos.shift(); // remove o primeiro
        console.log(removido);

    console.log(alunos.length); // resultado = 4;
    

//                0                      1       3    4      - indices;
    let nomes = ['Meu nome é Fabricio', 'tenho', 21, 'anos']; 
        console.log(nomes);
        console.log(nomes[0]); // as array tambem são indexizadas, como as strings;

// delete alunos[1] - Vai deletar um item da array e irá ficar vázio;

// console.log(alunos.slice(0, -4)) // é utilizado para fazer o fatiamento da array.
 //alunos[1] = 'Maria'; // posso alterar um item dentro da array utilizando este metodo;

 
