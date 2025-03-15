**# MyTodo App - MDN Documentation**

## Introduction
MyTodo App is a simple task management application that allows users to add, edit, mark as complete, and delete tasks. The application stores tasks in local storage and provides a clean UI for managing todos efficiently.

---

## **1. App.jsx** (Main Component)
### **Purpose:**
The `App.jsx` file is the main entry point of the application. It manages the state of the todos, handles user interactions, and renders the UI components.

### **Imports:**
```jsx
import './App.css';
import Delete from './components/Delete';
import Editing_text from './components/Editing_text';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
```
- **CSS**: Imports styles.
- **Components**: Imports `Delete`, `Editing_text`, and `Navbar` components.
- **Hooks**: Uses `useState` for managing states and `useEffect` for loading todos from local storage.
- **UUID**: Generates unique IDs for each todo item.

### **State Variables:**
```jsx
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);
const [showDelete, setShowDelete] = useState(false);
const [deleteId, setDeleteId] = useState(null);
const [editId, setEditId] = useState(null);
const [showFinished, setShowFinished] = useState(false);
```
- **todo**: Stores the input value for a new task.
- **todos**: An array containing all tasks.
- **showDelete**: Boolean state for displaying the delete confirmation modal.
- **deleteId**: Stores the ID of the task to be deleted.
- **editId**: Stores the ID of the task being edited.
- **showFinished**: Boolean for filtering completed tasks.

### **Functions:**
#### **Load Todos from Local Storage**
```jsx
useEffect(() => {
  let savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    setTodos(JSON.parse(savedTodos));
  }
}, []);
```
Loads saved todos from `localStorage` when the app initializes.

#### **Save Todos to Local Storage**
```jsx
const saveToLocal = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
```
Saves the todos array to local storage.

#### **Add a Todo**
```jsx
const handleAdd = () => {
  if (todo.trim() === '') return;
  setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
  setTodo('');
  saveToLocal();
};
```
Adds a new task to the list.

#### **Toggle Completion Status**
```jsx
const handleToggle = (id) => {
  setTodos(
    todos.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
  );
  saveToLocal();
};
```
Marks a task as completed or incomplete.

#### **Handle Delete**
```jsx
const handleDeleteClick = (id) => {
  setDeleteId(id);
  setShowDelete(true);
};

const handleDeleteConfirm = () => {
  setTodos(todos.filter((t) => t.id !== deleteId));
  setShowDelete(false);
  saveToLocal();
};
```
Displays the delete confirmation modal and removes a task.

#### **Edit a Todo**
```jsx
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
```
Handles task editing.

---

## **2. Delete.jsx** (Delete Confirmation Component)
### **Purpose:**
This component displays a confirmation modal before deleting a todo.

### **Code:**
```jsx
const Delete = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold">Are you sure you want to delete?</h2>
        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded-md">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
```
### **Props:**
- `onConfirm`: Function to execute when delete is confirmed.
- `onCancel`: Function to execute when delete is canceled.

---

## **3. Editing_text.jsx** (Edit Todo Component)
### **Purpose:**
Allows the user to edit a todo.

### **Code:**
```jsx
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
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={updatedTodo}
        onChange={handleChange}
        className="bg-white p-2 py-1 w-full rounded-lg"
        autoFocus
      />
      <div className="flex space-x-1.5">
        <button
          onClick={handleSaveClick}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Editing_text;
```
### **Props:**
- `todo`: The current todo text.
- `onSave`: Function to save the updated todo.
- `onCancel`: Function to cancel editing.

---

## **Conclusion**
This documentation provides an in-depth overview of the `MyTodo App`, its components, and functionality. Let me know if you need any modifications or improvements!