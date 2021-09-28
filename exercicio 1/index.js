/*
1(1pt)- Em uma página HTML construa as seguintes funções e comandos JS. 
- Construir uma função chamada declarationMed (function declaration) que recebe 3 números como parâmetro e retorna a média destes números. Chame a função passando os 3 números, guarde o retorno em uma variável e depois imprima a variável no console através do console.log(var). Para visualizar o console utilize a ferramenta do desenvolvedor do google chrome (aba console). 
- Construir uma função similar chamada anonimaMed só que na sintaxe anonima. Chame a função passando 3 números, guarde o retorno em uma variável e depois imprima a variável no console através do console.log(var). 
- Construir uma função similar chamada arrowMed só que na sintaxe arrow. Chame a função passando 3 números, guarde o retorno em uma variável e depois imprima a variável no console através do console.log(var).
*/

function declarationMed(val1, val2, val3){
    return (val1+val2+val3)/3;
}

var media = declarationMed(1,2,3);
console.log(media);

/////////

const anonimaMed = function(val1, val2, val3){
    return (val1+val2+val3)/3;
}

var media2 = anonimaMed(2,4,3);
console.log(media2);

/////////

const arrowMed = (val1, val2, val3) => {
    return (val1+val2+val3)/3;
}

var media3 = arrowMed(5, 6, 7);
console.log(media3);