var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


    var createTaskHandler = function(event){
        event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className= "task-item";
    listItemEl.textContent = "this is a new task."
    tasksToDoEl.appendChild(listItemEl);
    
    };
    formEl.addEventListener("submit", createTaskHandler);



  var taskItemEl = document.createElement("li");
  taskItemEl.textContent = "hello";
  taskItemEl;
  
 
  