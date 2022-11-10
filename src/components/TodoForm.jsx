import { useState } from "react";

const TodoForm = (todoList, setTodoList, nextTodoId, setNextTodoId) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    setTodoList([
      ...todoList,
      { id: nextTodoId, text: todo, isCompleted: false },
    ]);
    setNextTodoId(nextTodoId + 1);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="todoInput"
            value={todo}
            onChange={(value) => setTodo(value.target.value)}
          />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
