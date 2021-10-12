/*
3 (1pt) - Em um campo texto perguntar quantos alunos quer cadastrar. Ao clicar um botão, o JS deve criar e mostrar na tela a quantidade de campos texto informada (Utilize document.createElement(".."), document.createTextNode(".."), appendChild(...), etc. ) e um novo botão. 
Ao clicar no novo botão o JS deve imprimir na tela o nome dos alunos inscritos (os nomes dos alunos que foram colocados nos campos texto da etapa anterior).
*/

function enviar(){
    const table = document.getElementById('table');
    let alunos = document.getElementById('alunoNum').value;
    var erro = 0;
    if(Math.sign(alunos) != 1){
        erro++;
        document.getElementById('alunoNum').className = 'erro';
    }
    if(erro == 0){
        var exists = document.getElementsByClassName('buttonConfirm');
        if(exists.length == 0){
            var row = table.insertRow(0);
            row.id = 'rowConfirm';
            var td = row.insertCell(0);
            var p = document.createElement('p');
            p.id = 'text';
            td.id = 'cellConfirm';
            var buttonYes = document.createElement('button');
            buttonYes.id = 'buttonYes'; buttonYes.className = 'buttonConfirm'; 
            buttonYes.innerHTML = 'Sim';
            buttonYes.onclick = confirmar();
    
            var buttonNo = document.createElement('button');
            buttonNo.id = 'buttonNo'; buttonNo.className = 'buttonConfirm'; 
            buttonNo.onclick = function (){
                var delRow = document.getElementById('rowConfirm');
                delRow.parentNode.removeChild(delRow);
            }
            buttonNo.innerHTML = 'Não';
            
            var txt = document.createTextNode(`Deseja mesmo cadastrar ${alunos} alunos?`);
            
            p.appendChild(txt);
            td.appendChild(p);
            td.appendChild(buttonYes);
            td.appendChild(buttonNo);

            // campos
            
        } else {
            var txt = document.createTextNode(`Deseja mesmo cadastrar ${alunos} alunos?`);
            var p = document.getElementById('text');
            p.innerHTML = '';
            p.appendChild(txt);
        }
    }
}

function confirmar(){
    let alunos = document.getElementById('alunoNum').value;
}

function removeErr(elem){
    document.getElementById(elem).classList.remove('erro');
}

function addCampos() {
    var table = document.getElementById('alunoNum');
}