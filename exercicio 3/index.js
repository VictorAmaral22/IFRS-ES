/*
3 (1pt) - Em um campo texto perguntar quantos alunos quer cadastrar. Ao clicar um botão, o JS deve criar e mostrar na tela a quantidade de campos texto informada (Utilize document.createElement(".."), document.createTextNode(".."), appendChild(...), etc. ) e um novo botão. 
Ao clicar no novo botão o JS deve imprimir na tela o nome dos alunos inscritos (os nomes dos alunos que foram colocados nos campos texto da etapa anterior).
*/    
let colunas = 0;
let botao = 0;
let enviado = 0
function enviar(){
    const div = document.getElementById('div');
    const divText = document.getElementById('divText');
    const divButton = document.getElementById('divButton');
    let alunos = document.getElementById('alunoNum').value;
    var erro = 0;
    if(Math.sign(alunos) != 1){
        document.getElementById('alunoNum').style.borderColor = 'red';
    } else {
        for(let c=0; c < alunos.length; c++){
            if(alunos >= colunas){
                let novasColunas = alunos-colunas
                for(let c=0; c < novasColunas; c++){
                    const input=document.createElement('input');
                    input.id='input'+(c+1);
                    input.type='text';
                    input.required=true;
                    div.append(input);
                    colunas+=1
                }
            } else if(alunos <= colunas){
                let tirarColunas = colunas-alunos
                for(let c=0; c < tirarColunas; c++){
                    const input = document.getElementById('input'+(c+1));
                    input.parentNode.removeChild(input);
                    colunas--;
                }
            }
        }
        if(botao == 0){
            var teste = document.getElementById('finalizar');
            if(teste == null){
                const button=document.createElement('button');
                button.textContent='Finalizar';
                button.id = 'finalizar';
                button.onclick = () => {
                    for(let c=0; c < colunas; c++){
                        const p = document.createElement('p');
                        p.id='p'
                        const input = document.getElementById('input'+(c+1));
                        console.log(input);
                        p.innerHTML = input.value
                        div.append(p);
                    }
                    botao += 1;
                    enviado +=1;
                    button.disabled = true;
                }
                divButton.append(button);
            }
        }
        if(enviado > 0){
            var button = document.getElementById('enviar');
            button.disabled = true;
        }
    }
}