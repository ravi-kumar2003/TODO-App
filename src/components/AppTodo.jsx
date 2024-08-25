import React, { useContext, useState } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { TodoItemsContext } from "../../../Todo-App/src/store/todo-item-store";
function AppTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim() !== "" && dueDate.trim() !== "") {
      addNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            onChange={handleNameChange}
            placeholder="Enter your TODO"
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
