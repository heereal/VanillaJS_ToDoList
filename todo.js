let todosArray = [
  {
    id: 1,
    content: "영화보기",
    isDone: false,
  },
];

// todosArray 배열 렌더링 및 업데이트
const paintTodos = () => {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ""; //todoList 요소 안의 HTML 초기화
  console.log("paintTodos 실행");

  // todosArray를 todoList HTML 요소에 그리기
  todosArray.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.id = todo.id;

    const content = document.createElement("div");
    content.innerText = todo.content;

    const btns = document.createElement("div");
    btns.classList.add("todo-btns");

    // const completeBtn = document.createElement("button");
    // completeBtn.classList.add("complete-Btn");
    // completeBtn.innerHTML = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-Btn");
    deleteBtn.innerHTML = "삭제";

    todoList.appendChild(li);
    li.appendChild(content);
    li.appendChild(btns);
    // btns.appendChild(completeBtn);
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
  paintTodos();
};

// 투두리스트 완료하기
const completeTodo = (event) => {
  // 버튼을 클릭한 li 요소 찾기
  const todoItem = event.target.closest(".todo-item");
  // li 요소의 id 가져오기
  const itemId = todoItem.id;
};

// 투두리스트 삭제하기
const deleteTodo = (event) => {
  // 버튼을 클릭한 li 요소 찾기
  const todoItem = event.target.closest(".todo-item");
  // li 요소의 id 가져오기
  const itemId = todoItem.id;

  todosArray = todosArray.filter((todo) => todo.id != itemId);
  paintTodos();
};

// 페이지 로딩 시에 실행되는 함수
window.onload = () => {
  paintTodos();
};

document.querySelector(".submit-btn").addEventListener("click", addTodo);
// document.querySelector(".complete-Btn").addEventListener("click", completeTodo);
// document.querySelector(".delete-Btn").addEventListener("click", deleteTodo);

// 이벤트 위임: .todo-list 요소에 이벤트 리스너 추가
document.querySelector(".todo-list").addEventListener("click", (event) => {
  // 클릭한 요소가 complete-Btn 클래스를 가지고 있는지 확인
  if (event.target.classList.contains("complete-Btn")) {
    completeTodo(event);
  }

  if (event.target.classList.contains("delete-Btn")) {
    deleteTodo(event);
  }
});
