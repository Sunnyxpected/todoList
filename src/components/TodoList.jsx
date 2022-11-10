const TodoList = ({ todoList, setTodoList, setNextTodoId }) => {
  const handleRemoveSubmit = (event, id) => {
    event.preventDefault();
    setTodoList(
      todoList
        .filter((todo) => todo.id !== id)
        .map((todo) => {
          const todoObj = todo;
          //reset the Id
          todoObj["id"] = todo.id > id ? todo.id - 1 : todo.id;
          return todoObj;
        })
    );
    setNextTodoId(todoList.length);
  };

  const handleSetCompletedSubmit = (event, todo) => {
    event.preventDefault();
    todoList[todoList.indexOf(todo)].isCompleted =
      !todoList[todoList.indexOf(todo)].isCompleted;
    setTodoList(todoList);
    document
      .getElementById("entry" + todo.id)
      .parentElement.classList.add("completed");
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>TODO</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.id}>
              <td className={todo.isCompleted ? "completed" : ""}>
                <span id={"entry" + todo.id}>{todo.text}</span>
              </td>
              <td>
                <form
                  onSubmit={(e) => {
                    handleRemoveSubmit(e, todo.id);
                  }}
                >
                  <button className="actionButton">Delete</button>
                </form>
                <form
                  onSubmit={(e) => {
                    handleSetCompletedSubmit(e, todo);
                  }}
                >
                  <button className="actionButton">Mark As Completed</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;
