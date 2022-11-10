import { useState } from "react";
import "../scss/AddEntryForm.scss";

const AddEntryForm = ({
  entryList,
  setEntryList,
  nextEntryId,
  setNextEntryId,
  entryConstructor,
}) => {
  const [entryText, setEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entryText) {
      return;
    }
    setEntryList([...entryList, entryConstructor(nextEntryId, entryText)]);
    setNextEntryId(nextEntryId + 1);
    setEntry("");
  };

  return (
    <>
      <form className="entryForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={entryText}
            onChange={(value) => setEntry(value.target.value)}
          />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default AddEntryForm;
