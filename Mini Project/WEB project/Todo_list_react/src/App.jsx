import './App.css';
import Delete from './components/Delete';
import Editing_text from './components/Editing_text';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // 🔹 State Management
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showFinished, setShowFinished] = useState(false);

  // 🔹 Load Todos from Local Storage
  useEffect(() => {
    let savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 🔹 Save Todos to Local Storage
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // 🔹 Handle Add Todo
  const handleAdd = () => {
    if (todo.trim() === '') return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
    saveToLocal();
  };

  // 🔹 Handle Checkbox Toggle
  const handleToggle = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
    saveToLocal();
  };

  // 🔹 Handle Delete Todo
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDeleteConfirm = () => {
    setTodos(todos.filter((t) => t.id !== deleteId));
    setShowDelete(false);
    saveToLocal();
  };

  // 🔹 Handle Edit Todo
  const handleEditClick = (id) => {
    setEditId(id);
  };

  const handleSave = (id, updatedText) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, todo: updatedText } : t))
    );
    setEditId(null);
    saveToLocal();
  };

  return (
    <>
      <Navbar />

      <div className="md:container md:mx-auto p-5 md:w-1/2 w-full bg-violet-100 md:rounded-xl min-h-[92vh] md:min-h-[80vh] md:my-5">

        {/* 🔹 Header */}
        <h1 className="font-bold text-center md:text-xl text-lg">MyTask - Manage your todos at one place</h1>

        {/* 🔹 Add Todo Section */}
        <div className="Addtodo mt-10 flex flex-col gap-2">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <div className="flex flex-col items-center gap-2 border-b-1 border-slate-400 pb-5">
            <div className="flex w-full gap-2">
              <input
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder='Enter your todo..'
                className="bg-white p-2 py-1 w-full rounded-xl"
              />
              {/* Add Button */}
              <button
                onClick={handleAdd}
                className="bg-violet-600 text-white font-semibold p-4 py-1 rounded-xl shadow-md hover:bg-violet-700 transition-all duration-300 transform active:scale-98"
              >
                Add
              </button>
            </div>

            {/* Show Finished Checkbox */}
            <div className="mt-3 self-start ">
              <input type="checkbox" onChange={() => setShowFinished(!showFinished)} checked={showFinished} className="accent-violet-600 w-4 h-4" />
              <label className="ml-2 ">Show Finished Tasks</label>
            </div>
          </div>

          <h2 className="font-bold text-lg my-2">Your Tasks</h2>

          {/* 🔹 Scrollable Todo List Section */}
          <div className="todos flex flex-col items-center bg-transparent p-2 rounded-md  max-h-94 overflow-y-auto w-full">
            {todos.length === 0 && <div className="mx-6">No todos to display</div>}

            {todos.map((t) => (showFinished || !t.isCompleted) && (
              <div key={t.id} className="todo w-full flex justify-between items-center p-2 my-2 bg-white rounded-lg shadow-md hover:bg-amber-100 transition-all">

                {/* Todo Text & Checkbox */}
                <div className="text flex items-center">
                  <input type="checkbox" checked={t.isCompleted} onChange={() => handleToggle(t.id)} className="mr-2 w-4 h-4 accent-violet-600" />
                  {editId === t.id ? (
                    <Editing_text
                      todo={t.todo}
                      onSave={(updatedText) => handleSave(t.id, updatedText)}
                      onCancel={() => setEditId(null)}
                    />
                  ) : (
                    <span className={`mx-4 ${t.isCompleted ? 'line-through' : ''}`}>{t.todo}</span>
                  )}
                </div>

                {/* Edit & Delete Buttons */}
                <div className="edit_del_btn md:space-x-4 space-x-1 flex  ">
                  <button
                    onClick={() => handleEditClick(t.id)}
                    className="bg-violet-600 material-symbols-outlined text-xs md:text-lg text-white font-semibold p-2 py-1 md:py-2 rounded-md hover:bg-violet-700 transition duration-300"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(t.id)}
                    className="bg-red-600 material-symbols-outlined text-xs md:text-lg text-white font-semibold p-2 py-1 md:py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDelete && <Delete onConfirm={handleDeleteConfirm} onCancel={() => setShowDelete(false)} />}
      </div>
    </>
  );
}

export default App;
