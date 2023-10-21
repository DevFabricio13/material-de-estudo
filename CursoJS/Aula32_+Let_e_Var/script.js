const verdadeira = true; 

let nome = 'Fabricio'; //? Criando uma variável
var nome2 = "Undestand";

var nome2 = 'Testando' //TODO: O var foi redeclarado. 

//* Let possui um escopo de bloco {...bloco}
//* Var possui um escopo de função

if (verdadeira) {
    let nome = 'Ribeiro'; //? Criando uma variável dentro do escopo do if, pois possui outro {}.
        //console.log(nome, nome2);

        if (verdadeira) {
            let nome = 'Fabricio Ribeiro'
            console.log(nome, nome2); 
        }
}
