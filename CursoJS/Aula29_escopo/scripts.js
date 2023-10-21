let x = 15;

function escopo() {
    let x = 160

    console.log(x); // escopo function
} // o escopo pode ser separado também por um if, while, for....

escopo(); // chamando/executando a função e vai apresentar o valor do X dentro do escopo da função.
    console.log(x); // este console.log vai apresentar o valor do X que está no escopo global
    // na linha 1.

    let t = 10;

    function multiplicar(b,c) {
        let t = b * c;
    
        if(t > 10) {
        
            let t = 1;

            t++; // a potenciação tem que ser com o nome da variavel, e nao com o valor.


            console.log(t); // escopo do if

        }

        console.log(t); // escopo da function
    
    }
    
        console.log(t); // valor do escopo global.
    
    multiplicar(7, 3); // resultado da function



    function soma(u, p) {
        
        let s = u + p

        if(4 > s) {
            
            let s = 10;

            s++;

            console.log(s);

        }

        console.log(s);

    }

    soma(5, 3);