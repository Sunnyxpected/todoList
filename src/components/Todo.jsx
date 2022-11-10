import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [nextTodoId, setNextTodoId] = useState(1);

  return (
    <>
      <div className="todoContainer">
        <TodoForm
          todoList={todoList}
          setTodoList={setTodoList}
          nextTodoId={nextTodoId}
          setNextTodoId={setNextTodoId}
        />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          setNextTodoId={setNextTodoId}
        />
      </div>
    </>
  );
}
