

// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = (tasksList) => {
    
  const tasksDescriptions =  tasksList.map( tasksList => tasksList.description);
  
    return tasksDescriptions;

}

// console.log(getTasksDescriptions(tasks));



// Função para filtrar tarefas por prioridade
 const filterTasksByPriority = (tasksList, priority) => {
  const highPriorityTasks = tasksList.filter(task => task.priority === priority)

  return highPriorityTasks;
}
// console.log(filterTasksByPriority(tasks,'baixa'));

// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => {
  return  tasksList.find(task => task.id === id);
}

// console.log(findTaskById(tasks, 2)); 



const removeTask = (tasksList, id) => {

    const index = tasksList.findIndex(task => task.id === id);
    if(index !== -1){
        tasksList.splice(index,1);
       
       return tasksList;

    }else {
        return "Tarefa não encontrada"
    }
    
}

// console.log(removeTask(tasks,7));
