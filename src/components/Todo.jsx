import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [nextTodoId, setNextTodoId] = useState(1);

  const addTodoToList = (todoText) => {
    if (!todoText) {
      return;
    }
    setTodoList([
      ...todoList,
      { id: nextTodoId, text: todoText, isCompleted: false },
    ]);
    setNextTodoId(nextTodoId + 1);
  };

  return (
    <>
      <div className="todoContainer">
        <TodoForm handleSubmit={addTodoToList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          setNextTodoId={setNextTodoId}
        />
      </div>
    </>
  );
}
