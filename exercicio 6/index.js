/* 6(2pt) - Faça agora uma versão do exercício 5 aonde:
- Seja mantida a mesma estrutura de classes;
- Em um formulário é solicitado o nome, cpf e matricula de um aluno. 
Com estes dados um objeto aluno deve ser criado e armazenado em um array de alunos. 
Deve ser possível acrescentar quantos alunos o usuário quiser. 
Ou seja cada vez que clicar em um botão “Adicionar aluno” um objeto aluno é adicionado ao array de alunos.
- Em outro formulário é solicitado o nome, cpf, area e telefone de um professor. Com estes dados um objeto professor deve ser criado.
- Em outro formulário é solicitada a identificação de 1 turma. Ao clicar em um botão “Criar turma” é criado um objeto turma. 
Ao criar este objeto deve se passado ao seu construtor a identificação da turma, o objeto professor armazenado anteriormente e 
o array de alunos armazenado anteriormente. Após criar o objeto turma, o método imprimeDados da turma deve ser chamado. 
Este método irá mostrar na página todos dados da turma, de seu professor e de seus alunos.
- Todos estes formulários e dados devem ser mostrados na mesma página
*/

class pessoa {
    constructor(cpf, nome){
        this.cpf = cpf;
        this.nome = nome;
    }
    showPessoa(){
        return {nome: this.nome, cpf: this.cpf};
    }
}
class professor extends pessoa{
    constructor(cpf, nome, area, telefone){
        super(cpf, nome);
        this.area = area;
        this.telefone = telefone;
    }
    show(){
        return {cpf: this.cpf, nome: this.nome, area: this.area, telefone: this.telefone};
    }
}
class aluno extends pessoa{
    constructor(cpf, nome, matricula){
        super(cpf, nome);
        this.matricula = matricula;
    }
    show(){
        return {cpf: this.cpf, nome: this.nome, matricula: this.matricula};
    }
}

class turma {
    constructor(id, professor, alunos,){
        this.id = id;
        this.professor = professor;
        this.alunos = [];
        alunos.forEach(aluno => {
            this.alunos.push(aluno);
        });
    }
    imprime(){        
        return {
            id: this.id,
            professor: this.professor,
            alunos: this.alunos
        }
    }
    imprimeTabela() {
        var tableProf = document.getElementById('rows-prof');
        var tableAluno = document.getElementById('rows-aluno');

        var prof = tableProf.insertRow(-1);
        var turmaProf = prof.insertCell(-1);
        var cpfProf = prof.insertCell(-1);
        var nomeProf = prof.insertCell(-1);
        var areaProf = prof.insertCell(-1);
        var telProf = prof.insertCell(-1);
        turmaProf.innerHTML = this.id;
        cpfProf.innerHTML = this.professor.cpf;
        nomeProf.innerHTML = this.professor.nome;
        areaProf.innerHTML = this.professor.area;
        telProf.innerHTML = this.professor.telefone;
        for (let c = 0; c < this.alunos.length; c++) {
            var aluno = tableAluno.insertRow(-1);
            var turmaAluno = aluno.insertCell(-1);
            var cpfAluno = aluno.insertCell(-1);
            var nomeAluno = aluno.insertCell(-1);
            var matriculaAluno = aluno.insertCell(-1);
            turmaAluno.innerHTML = this.id;
            cpfAluno.innerHTML = this.alunos[c].cpf;
            nomeAluno.innerHTML = this.alunos[c].nome;
            matriculaAluno.innerHTML = this.alunos[c].matricula;
        }
    }
}

var alunos = [];
function unsetError(index) {
    console.log('Removendo erro');
    var div = document.getElementById(index);
    div.style.borderColor = 'black';
}
function setError (index) {
    console.log('Erro!');
    var div = document.getElementById(index);
    div.style.borderColor = 'red';
}

function addAluno () {
    let nome = document.getElementById('aluno_nome').value;
    let cpf = document.getElementById('aluno_CPF').value;
    let matricula = document.getElementById('aluno_matricula').value;
    var erro = 0;

    if(nome.trim() == '' || isNaN(nome) === false ){
        setError('aluno_nome');
        erro++;
    } else{
        unsetError('aluno_nome')
    }
    if(cpf.length != 11){
        setError('aluno_CPF');
        erro++;
    } else {
        var array = ['1','2','3','4','5','6','7','8','9','0'];
        cpf = cpf.split('');
        let erro2 = 0;
        cpf.forEach(element => {
            if(!array.includes(element)){
                erro2++;
                console.log('errou numero')
            }
        });
        if(erro2 != 0){
            setError('aluno_CPF');
            erro++;
        } else {
            unsetError('aluno_CPF');
            cpf = cpf.join('');
        }
    }
    if(matricula.length != 8){
        setError('aluno_matricula');
        erro++;
    } else {
        var array = ['1','2','3','4','5','6','7','8','9','0'];
        matricula = matricula.split('');
        let erro2 = 0;
        matricula.forEach(element => {
            if(!array.includes(element)){
                erro2++;
                console.log('errou numero')
            }
        });
        if(erro2 != 0){
            setError('aluno_matricula');
            erro++;
        } else {
            unsetError('aluno_matricula');
            matricula = matricula.join('');
        }
    }

    if(erro == 0){
        console.log('Tudo ok!');
        let aluno1 = new aluno(cpf, nome, matricula);
        alunos.push(aluno1);
    }
    console.log(alunos);
}

var teacher = 0;

function addProfessor () {
    let nome = document.getElementById('professor_nome').value;
    let cpf = document.getElementById('professor_CPF').value;
    let area = document.getElementById('professor_area').value;
    let telefone = document.getElementById('professor_telefone').value;
    var erro = 0;
       
    if(nome.trim() == '' || isNaN(nome) === false ){
        setError('professor_nome');
        erro++;
    } else{
        unsetError('professor_nome')
    }
    if(cpf.length != 11){
        setError('professor_CPF');
        erro++;
    } else {
        var array = ['1','2','3','4','5','6','7','8','9','0'];
        cpf = cpf.split('');
        let erro2 = 0;
        cpf.forEach(element => {
            if(!array.includes(element)){
                erro2++;
                console.log('errou numero')
            }
        });
        if(erro2 != 0){
            setError('professor_CPF');
            erro++;
        } else {
            unsetError('professor_CPF');
            cpf = cpf.join('');
        }
    }
    if(area.trim() == '' || isNaN(area) === false ){
        setError('professor_area');
        erro++;
    } else{
        unsetError('professor_area')
    }
    if(erro == 0){
        console.log('Tudo ok!');
        console.log(new professor(cpf,nome,area,telefone));
        teacher = new professor(cpf,nome,area,telefone);
    }
}

function addTurma () {
    let nome = document.getElementById('turma_nome').value;
    var erro = 0;
    if(nome.trim() == '' || isNaN(nome) === false ){
        setError('turma_nome');
        erro++;
    } else{
        unsetError('turma_nome')
    }
    if(erro == 0 && alunos.length !== 0 && teacher !== 0){
        console.log('Tudo ok!');
        let turma1 = new turma(nome, teacher, alunos);
        turma1.imprimeTabela();
    }
    alunos = [];
    teacher = 0;
}
