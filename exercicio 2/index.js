/*
2(1,5pt) - Fazer um formulário com os campos abaixo. Ao clicar no botão submeter uma função JS deve ser chamada. Esta função deverá fazer as seguintes operações nos campos abaixo:

Nome: verificar se foi preenchido.
CPF: verificar se foi preenchido e se foram digitados 11 caracteres. (utilizar a propriedade .lenght das strings)
Idade: Verificar se é um numero entre 0 e 100. 

// No final a função escreve todos os erros na página logo abaixo do formulário. Além disso, a função deve pintar as bordas dos campos errados de vermelho (garanta que os campos errados fiquem com a borda vermelha quando estiverem errados e sem borda vermelha quando estiverem corretos, penso nos casos em que se envia e se corrige os campos várias vezes ao corrigir e enviar os dados várias vezes). Por fim, ao corrigir o preenchimento dos dados a função deve deixar o foco em algum campo com erro.
*/

function enviarForm(){
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    var erro = 0;
       
    var setError = (index) => {
        console.log('Erro!');
        document.getElementById(index).style.borderColor = 'red';
    }
    
    if(nome.trim() == '' || isNaN(nome) === false ){
        setError('nome');
        erro++;
    } else{
        unsetError('nome')
    }
    if(cpf.length != 11){
        setError('cpf');
        erro++;
    } else {
        var array = ['1','2','3','4','5','6','7','8','9','0'];
        cpf = cpf.split('');
        let erro2 = 0;
        cpf.forEach(element => {
            if(!array.includes(element)){
                erro2++;
                console.log('errou nuemro')
            }
        });
        if(erro2 != 0){
            setError('cpf');
            erro++;
        } else {
            unsetError('cpf');
        }
    }
    if(idade > 100 || idade < 1){
        setError('idade');
        erro++;
    } else{
        unsetError('idade')
    }
    if(erro == 0){
        console.log('Tudo ok!');
    }
}

var unsetError = (index) => {
    console.log('Removendo erro');
    document.getElementById(index).style.borderColor = '#c4c4c4';
}