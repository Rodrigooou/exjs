const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const tasksArray = [];

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const taskText = input.value;
      if (taskText) {
        tasksArray.push(taskText); // Adiciona a tarefa ao array
        input.value = '';

        // Imprime o array atualizado no console
        console.log('Tarefas atualizadas:', tasksArray);

        // Limpa a lista antes de preenchê-la novamente
        taskList.innerHTML = '';

        // Preenche a lista a partir do array usando um loop for
        for (let i = 0; i < tasksArray.length; i++) {
          const taskItem = document.createElement('li');
          taskItem.textContent = tasksArray[i];
          taskList.appendChild(taskItem);

        }
      }
    });

