const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".submit-btn");

let todolist = [];

// 투두리스트 추가하기
const addTodo = () => {
  const todo = document.querySelector(".todo-input").value;
  const newTodo = {
    id: todolist.length + 1,
    todo,
    isDone: false,
  };
  todolist.push(newTodo);
};

// 투두리스트 완료하기
const completeTodo = () => {
  console.log("complete");
};

// 투두리스트 삭제하기
const deleteTodo = () => {
  console.log("delete");
};

document.querySelector(".submit-btn").addEventListener("click", addTodo);
document.querySelector("#completeBtn").addEventListener("click", completeTodo);
document.querySelector("#deleteBtn").addEventListener("click", deleteTodo);
