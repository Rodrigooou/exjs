// Criando Listinha Array 
let listaDeTarefas = [];

// Função para adicionar uma nova tarefa à tabela
function adicionarTarefa(descricao, autor, departamento, importancia) {
    const novaTarefa = {
        descricao: descricao,
        autor: autor,
        departamento: departamento,
        importancia: importancia
    };
    // Adiciona a nova tarefa à lista
    listaDeTarefas.push(novaTarefa);
    
    // Atualiza a tabela apos adicionar uma nova tarefa
    atualizarTabela();
}

// Função para remover uma tarefa da tabela
function removerTarefa(index) {
    // Remove a tarefa do índice especificado
    listaDeTarefas.splice(index, 1);
    // Atualiza a tabela após remover uma tarefa
    atualizarTabela();
}

// Função para atualizar a tabela com os dados da lista de tarefas
function atualizarTabela() {
    // Obtém a referência da tabela no HTML
    const tabela = document.getElementById("tabelaTarefas").getElementsByTagName('tbody')[0];
    // Limpa as linhas da tabela
    tabela.innerHTML = ''; 

    // Loop para percorrer todas as tarefas na lista
    listaDeTarefas.forEach((tarefa, index) => {
        // Cria uma nova linha na tabela
        const linha = tabela.insertRow();
        // Cria células para cada coluna da tabela
        const colunaDescricao = linha.insertCell(0);
        const colunaAutor = linha.insertCell(1);
        const colunaDepartamento = linha.insertCell(2);
        const colunaImportancia = linha.insertCell(3);
        const colunaRemover = linha.insertCell(4);

        // Preenche as células com os dados da tarefa
        colunaDescricao.innerHTML = tarefa.descricao;
        colunaAutor.innerHTML = tarefa.autor;
        colunaDepartamento.innerHTML = tarefa.departamento;
        colunaImportancia.innerHTML = tarefa.importancia;
        // Adiciona um botão "Remover" que chama a função removerTarefa
        colunaRemover.innerHTML = `<button onclick="removerTarefa(${index})"> X </button>`;
    });
}

// Função para lidar com o envio do formulário
function eventoFormulario (event) {
    // Impede o recarregamento da página
    event.preventDefault(); 
    // Obtém os valores dos campos do formulário
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = document.getElementById("importancia").value;
    // Chama a função adicionarTarefa com os valores obtidos
    adicionarTarefa(descricao, autor, departamento, importancia);
    // Limpa os campos após adicionar a tarefa
    document.getElementById("descricao").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("departamento").value = "";
    // Define um valor padrão para a importância
    document.getElementById("importancia").value = "muito-importante"; 
}

// Aguarda o carregamento do DOM antes de associar o evento ao formulário
document.addEventListener("DOMContentLoaded", function() {
    // Associa a função eventoFormulario ao evento de envio do formulário
    document.getElementById("formTarefa").addEventListener("submit", eventoFormulario);
});