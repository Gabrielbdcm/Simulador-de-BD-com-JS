

        let nomeAluno = new Array();
        let cursoAluno = new Array();
        let idadeAluno = new Array();



    function gerar() {
            

            nomeAluno.push("Gabriel", "Maria", "Lara", "Ana", "Nicole", "José");
            cursoAluno.push(
            "Informática para Internet",
            "Desenvolvimento de Sistemas",
            "Ciência da Computação",
            "Design Gráfico",
            "Administração",
            "Engenharia");
            idadeAluno.push(16, 17, 18, 16, 17, 18);
                imprimir();
    
    }
    
        function cadastrar() {
            nomeAluno.push(document.getElementById('nome').value);
            cursoAluno.push(document.getElementById('curso').value);
            idadeAluno.push(document.getElementById('idade').value);

            document.getElementById('nome').value = '';
            document.getElementById('curso').value = '';
            document.getElementById('idade').value = '';
        }

        function imprimir() {
            let resultado = "";
            for (let i = 0; i < nomeAluno.length; i++) {
                    resultado += `<p>Nome: ${nomeAluno[i]}, Curso: ${cursoAluno[i]}, Idade: ${idadeAluno[i]}</p>`;
                }
                document.getElementById('resultado').innerHTML = resultado;
            }
            
        function pesquisar() {
        
            let nomeBusca = document.querySelector('input[placeholder="Digite o nome do aluno:"]').value;
            let resultado = "";
            for (let i = 0; i < nomeAluno.length; i++) {
                if (nomeAluno[i] === nomeBusca) {
                    resultado += `<p>Nome: ${nomeAluno[i]}, Curso: ${cursoAluno[i]}, Idade: ${idadeAluno[i]}</p>`;
                }
            }
            if (resultado) {
                document.getElementById('resultado').innerHTML = resultado;
            } else {
                document.getElementById('resultado').innerHTML = "Aluno não encontrado.";
            }
        }
     function excluir()
{
    let nomeBusca = document.querySelector('input[placeholder="Digite o nome do aluno:"]').value;
    let encontrado = false;
    
    for (let i = 0; i < nomeAluno.length; i++) {
        if (nomeAluno[i] === nomeBusca) {
            nomeAluno.splice(i, 1);
            cursoAluno.splice(i, 1);
            idadeAluno.splice(i, 1);
            encontrado = true;
            document.getElementById('resultado').innerHTML = `Aluno "${nomeBusca}" excluído com sucesso.`;
            break;
        }
    }
    
    if (!encontrado && nomeBusca !== "") {
        document.getElementById('resultado').innerHTML = `Aluno "${nomeBusca}" não encontrado.`;
    } else if (nomeBusca === "") {
        document.getElementById('resultado').innerHTML = "Digite um nome para excluir.";
    }
}
        

