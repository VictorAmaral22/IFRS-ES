/* 5(2pt)- Em uma página HTML com JS:
- Criar a classe pessoa(cpf,nome), herdada pelas classes professor(area, telefone) e aluno(matricula)
- Criar a classe turma(professor, alunos,identificação) 
- Criar métodos constructs para todas classes
- Criar o método imprimeDados na classe turma. Este método imprime todos os dados da turma incluindo os dados do professor e de todos os alunos da turma. 
Depois, diretamente no código:
- Criar 2 objetos professores
- Criar 6 objetos alunos 
- Criar 2 objetos turmas de 4 alunos
- Chamar o método imprime dados das duas turmas. 
A impressão deve ser feita em uma página HTML5 padrão com bootstrap. Os dados da turma, professor e alunos devem estar em tabelas.*/

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
    constructor(professor, alunos, id){
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
}
function addAluno () {
    let nome = document.getElementById('aluno_nome').value;
    let cpf = document.getElementById('aluno_cpf').value;
    let matricula = document.getElementById('aluno_matricula').value;
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
                console.log('errou numero')
            }
        });
        if(erro2 != 0){
            setError('cpf');
            erro++;
        } else {
            unsetError('cpf');
        }
    }
    if(matricula.length != 8){
        setError('matricula');
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
            setError('matricula');
            erro++;
        } else {
            unsetError('matricula');
        }
    }
    if(erro == 0){
        console.log('Tudo ok!');
    }
    let aluno = new aluno(nome,cpf,matricula)
    this.turma.push(aluno);
}
function addProfessor () {
    let nome = document.getElementById('professor_nome').value;
    let cpf = document.getElementById('professor_cpf').value;
    let area = document.getElementById('professor_area').value;
    let telefone = document.getElementById('professor_telefone').value;
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
                console.log('errou numero')
            }
        });
        if(erro2 != 0){
            setError('cpf');
            erro++;
        } else {
            unsetError('cpf');
        }
    }
    if(nome.trim() == '' || isNaN(nome) === false ){
        setError('nome');
        erro++;
    } else{
        unsetError('nome')
    }
    if(area.trim() == '' || isNaN(area) === false ){
        setError('area');
        erro++;
    } else{
        unsetError('area')
    }
    if(erro == 0){
        console.log('Tudo ok!');
    }
    let professor = new professor(cpf,nome,area,telefone)
    this.turma.push(professor);
}
function addTurma () {
    let turma = new turma()
}
// var alunos1 = [new aluno(12345678912, 'Zeus', 11030340), new aluno(23456789123, 'Posseidon', 11030341), new aluno(34567891234, 'Artemis', 11030342), new aluno(45678912345, 'Atena', 11030343)];
// var alunos2 = [new aluno(56789123456, 'Hades', 11030344), new aluno(67891234567, 'Nix', 11030345), new aluno(78912345678, 'Orfeu', 11030346), new aluno(89123456789, 'Hipnos', 11030347)];
// var prof1 = new professor(12123456789, 'Homero', 'História', '(53) 91234-5678');
// var prof2 = new professor(23456571235, 'Talles', 'Matemática', '(53) 91272-5677');
// var turmaA = new turma(prof1, alunos1, 'Olimpo');
// var turmaB = new turma(prof2, alunos2, 'Casa de Hades');
// var turmas = [turmaA.imprime(), turmaB.imprime()];
// var tableProf = document.getElementById('rows-prof');
// var tableAluno = document.getElementById('rows-aluno');

function imprimeDados(){
    console.log(turmas.length);
    for(let i = 0; i < turmas.length; i++){
        console.log(turmas[i]);
        var prof = tableProf.insertRow(-1);
        var turmaProf = prof.insertCell(-1);
        var cpfProf = prof.insertCell(-1);
        var nomeProf = prof.insertCell(-1);
        var areaProf = prof.insertCell(-1);
        var telProf = prof.insertCell(-1);
        turmaProf.innerHTML = turmas[i].id;    
        cpfProf.innerHTML = turmas[i].professor.cpf;    
        nomeProf.innerHTML = turmas[i].professor.nome;    
        areaProf.innerHTML = turmas[i].professor.area;    
        telProf.innerHTML = turmas[i].professor.telefone;
        for (let c = 0; c < turmas[i].alunos.length; c++) {
            var aluno = tableAluno.insertRow(-1);
            var turmaAluno = aluno.insertCell(-1);
            var cpfAluno = aluno.insertCell(-1);
            var nomeAluno = aluno.insertCell(-1);
            var matriculaAluno = aluno.insertCell(-1);
            turmaAluno.innerHTML = turmas[i].id;    
            cpfAluno.innerHTML = turmas[i].alunos[c].cpf;    
            nomeAluno.innerHTML = turmas[i].alunos[c].nome;    
            matriculaAluno.innerHTML = turmas[i].alunos[c].matricula;
        }    
    }
}
imprimeDados();
