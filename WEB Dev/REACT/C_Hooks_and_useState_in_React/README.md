# React Hooks and State (Notes)

## 🔹 What is State in React?
- State is a **special variable** that React keeps track of.
- When state changes, React **automatically updates** the UI.
- State is **only available in functional components using Hooks**.

### ✅ Example of State:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State variable

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 🔹 What are Hooks?
- **Hooks are special functions in React** that allow functional components to use features like state and side effects.
- Hooks **start with 'use'** (e.g., `useState`, `useEffect`, `useContext`).
- **Rules of Hooks:**
  - Can only be used **inside functional components**.
  - Should **not be used inside loops, conditions, or nested functions**.

---

## 🔹 Common React Hooks:
### 1️⃣ `useState` (For State Management)
- Creates a **state variable** and a **function to update it**.
- **Example:**
  ```jsx
  const [count, setCount] = useState(0);
  ```

### 2️⃣ `useEffect` (For Side Effects)
- Runs code **after the component renders** (like fetching data, event listeners, etc.).
- **Example:**
  ```jsx
  useEffect(() => {
    console.log("Component rendered or state changed");
  }, [count]);
  ```

### 3️⃣ `useContext` (For Global State Management)
- Helps **share state** between components **without passing props**.
- **Example:**
  ```jsx
  const value = useContext(MyContext);
  ```

---

## 🔹 Difference Between Normal Variable and State
| Feature       | Normal Variable | useState (State) |
|--------------|----------------|------------------|
| Updates UI?  | ❌ No           | ✅ Yes          |
| React Watches It? | ❌ No   | ✅ Yes |
| Changes Cause Re-render? | ❌ No | ✅ Yes |

---

## 🔹 Summary
✅ **State** is a special variable that React tracks.
✅ **Hooks** help functional components use state and other React features.
✅ **useState is a Hook** that creates and updates state variables.
✅ **State changes trigger UI updates automatically.**

