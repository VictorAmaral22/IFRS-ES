/*
3 (1pt) - Em um campo texto perguntar quantos alunos quer cadastrar. Ao clicar um botão, o JS deve criar e mostrar na tela a quantidade de campos texto informada (Utilize document.createElement(".."), document.createTextNode(".."), appendChild(...), etc. ) e um novo botão. 
Ao clicar no novo botão o JS deve imprimir na tela o nome dos alunos inscritos (os nomes dos alunos que foram colocados nos campos texto da etapa anterior).
*/

function enviar(){
    const div = document.getElementById('div');
    let alunos = document.getElementById('alunoNum').value;
    var erro = 0;
    if(Math.sign(alunos) != 1){
        document.getElementById('alunoNum').style.borderColor = 'red';
    } else {
        for(let c=0; c < alunos; c++){
            const input=document.createElement('input');
            input.type='text';
            input.required=true;
            div.append(input);
        }            

        // console.log(array);
        // for(let i = 0; i < array.length-1; i++){
        //     document.getElementById('div').appendChild = array[i];
        // }
    }
    
}