let todosArray = [
  {
    id: 1,
    content: "영화보기",
    isDone: false,
  },
];

const paintTodos = () => {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ""; //todoList 요소 안의 HTML 초기화

  // todosArray를 todoList HTML 요소에 그리기
  todosArray.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const content = document.createElement("div");
    content.innerText = todo.content;

    const btns = document.createElement("div");
    btns.classList.add("todo-btns");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-Btn");
    completeBtn.innerHTML = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-Btn");
    deleteBtn.innerHTML = "삭제";

    todoList.appendChild(li);
    li.appendChild(content);
    li.appendChild(btns);
    btns.appendChild(completeBtn);
    btns.appendChild(deleteBtn);
  });
};

// 투두리스트 추가하기
const addTodo = () => {
  const todo = document.querySelector(".todo-input").value;
  const newTodo = {
    id: todosArray.length + 1,
    content: todo,
    isDone: false,
  };
  todosArray.push(newTodo);
  console.log(todosArray);
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
// document.querySelector(".complete-Btn").addEventListener("click", completeTodo);
// document.querySelector(".delete-Btn").addEventListener("click", deleteTodo);

// 페이지 로딩 시에 실행되는 함수
window.onload = () => {
  paintTodos();
};
