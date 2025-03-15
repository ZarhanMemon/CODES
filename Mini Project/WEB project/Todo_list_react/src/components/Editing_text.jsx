import { useState } from "react";

const Editing_text = ({ todo, onSave, onCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const handleSaveClick = () => {
    if (updatedTodo.trim() === "") return;
    onSave(updatedTodo);
  };

  return (
    <div className="flex items-center gap-2  ">
      <input
        type="text"
        value={updatedTodo}
        onChange={handleChange}
        className="bg-white p-2 py-1 w-full rounded-lg"
        autoFocus />


      <div className="flex space-x-1.5 ">


        <button
          onClick={handleSaveClick}
          className="bg-green-600 text-xs md:text-lg  text-white font-small md:font-semibold p-2 py-1  rounded-md hover:bg-green-700 transition duration-300"
        >
          Save
        </button>

        <button
          onClick={onCancel}
          className="bg-gray-600  md:text-lg md:block hidden text-white font-small md:font-semibold  p-2 py-1 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Cancel
        </button>

      </div>

    </div>
  );
};

export default Editing_text;
