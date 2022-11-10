import { useState } from "react";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(todo);
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
}
