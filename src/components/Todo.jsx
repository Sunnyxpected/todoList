import { useState } from "react";
import AddEntryForm from "./AddEntryForm";
import EntryTable from "./EntryTable";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [nextTodoId, setNextTodoId] = useState(1);

  const todoConstructor = (id, text) => {
    return { id: id, text: text, isCompleted: false };
  };

  return (
    <>
      <div className="container">
        <AddEntryForm
          entryList={todoList}
          setEntryList={setTodoList}
          nextEntryId={nextTodoId}
          setNextEntryId={setNextTodoId}
          entryConstructor={todoConstructor}
        />
        <EntryTable
          entryList={todoList}
          setEntryList={setTodoList}
          setNextEntryId={setNextTodoId}
        />
      </div>
    </>
  );
}
