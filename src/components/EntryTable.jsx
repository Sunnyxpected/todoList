import "../scss/EntryTable.scss";

const EntryTable = ({ entryList, setEntryList, setNextEntryId }) => {
  const handleRemoveSubmit = (event, id) => {
    event.preventDefault();
    setEntryList(
      entryList
        .filter((entry) => entry.id !== id)
        .map((entry) => {
          const entryObj = entry;
          //"reset" the Ids
          entryObj["id"] = entry.id > id ? entry.id - 1 : entry.id;
          return entryObj;
        })
    );
    setNextEntryId(entryList.length);
  };

  const handleSetCompletedSubmit = (event, entry) => {
    event.preventDefault();
    const isCompleted = entryList[entryList.indexOf(entry)].isCompleted;
    entryList[entryList.indexOf(entry)].isCompleted = !isCompleted;
    setEntryList(entryList);
    const entryElement = document.getElementById(
      "entry" + entry.id
    ).parentElement;
    if (!isCompleted) {
      entryElement.classList.add("completed");
    } else {
      entryElement.classList.remove("completed");
    }
  };

  return (
    <>
      <table className="entryTable">
        <thead>
          <tr>
            <th>TODO</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entryList.map((entry) => (
            <tr key={entry.id}>
              <td className={entry.isCompleted ? "completed" : ""}>
                <span id={"entry" + entry.id}>{entry.text}</span>
              </td>
              <td>
                <form
                  onSubmit={(e) => {
                    handleRemoveSubmit(e, entry.id);
                  }}
                >
                  <button className="actionButton">Delete</button>
                </form>
                <form
                  onSubmit={(e) => {
                    handleSetCompletedSubmit(e, entry);
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
export default EntryTable;
