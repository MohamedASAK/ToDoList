// variables 
let nameOfTask = document.querySelectorAll(".home .addTask input");
let button = document.querySelector(".home .addTask button");
let todo = document.querySelector(".todoSection");
let TaskList = [];
// add task
let taskAdd = () =>{
    if(nameOfTask[0].value  != ""){
        let newTask = {
            taskName: nameOfTask[0].value,
        }
        TaskList.push(newTask);
        nameOfTask[0].value = "";
        showTaskList();
    }
    else{
        window.alert("Please enter name of task to add it");
    }
}
// delete task
let deleteTask = (i) => {
    TaskList.splice(i,1); //to delete one task
    showTaskList();
}
// update task
let editTask = (i) => {
    input = document.querySelectorAll(".row input");
    button = document.querySelectorAll(".row .edit");
    input[i].removeAttribute("readonly"); // to remove readonly
    input[i].focus(); // focus on input to update it
    button[i].setAttribute("onclick",`updateTask(${i})`);
    button[i].innerText = "Save";
    button[i].classList.replace("edit", "update");
}
let updateTask = (i) => {
    input = document.querySelectorAll(".row input");
    button = document.querySelector(".row .update");
    input[i].setAttribute("readonly", "readonly"); // to set readonly
    TaskList[i].taskName = input[i].value;
    button[i].setAttribute("onclick",`editTask(${i})`);
    button[i].innerText = "Edit";
    button[i].classList.replace("update", "edit");
    showTaskList();
}
// show tasks
let showTaskList = () => {
    nameOfTask[0].value = "";
    todo.innerHTML = "";
    TaskList.forEach((elementFromList, index) =>{
        todo.innerHTML += `
            <div class="row">
                <div class="TaskData">
                    <input type="text" value="${elementFromList.taskName}" readonly>
                </div>
                <div class="option">
                    <button onclick="editTask(${index})" class = "edit">Edit</button>
                    <button onclick="deleteTask(${index})" class = "delete">Remove</button>
                </div>
            </div>
        `
    })
}
//Events
button.addEventListener("click",taskAdd);