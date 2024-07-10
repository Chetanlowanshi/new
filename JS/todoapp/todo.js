 const addtaskbtn=document.querySelector("#addtaskbtn")
 const newtaskinput=document.querySelector("#newtask")
const todolist=document.querySelector("#todolist")

function createtaskElement(tasktext){
    let taskElement = document.createElement("div")
  taskElement.innerHTML = `
  <span>${tasktext}</span>
  <button id="edittask" >Edit</button>
<button id="deletetask" >Delete</button>
  
`;

 let deletebtn = taskElement.querySelector("#deletetask")
 deletebtn.addEventListener("click",()=>{
    taskElement.remove();
 })

  let Editbtn = taskElement.querySelector("#edittask")
  Editbtn.addEventListener("click",()=>{
     let newtasttext = prompt("Edit the task",tasktext)
     taskElement.querySelector("span").innerText=newtasttext
     if(newtasttext != ""){
        taskElement.querySelector("span").innerText = newtasttext
     }
  })















  return taskElement;


}
  addtaskbtn.addEventListener("click",()=>{
let tasktext = newtaskinput.value;
console.log(tasktext);

if(tasktext !=""){
    let taskElement=createtaskElement(tasktext)
    todolist.appendChild(taskElement);
    newtaskinput.value=""
}

})


























































