# The `useEffect` Hook in React (Notes)

## 🔹 What is `useEffect`?

- `useEffect` is a **React Hook** that lets you **run code after the component renders**.
- It is mainly used for **side effects** like:
  - Fetching data from an API
  - Updating the DOM
  - Subscribing to events
  - Setting up timers

---

## 🔹 How to Use `useEffect`

- `useEffect` takes **two arguments**:
  1. A **function** that runs after render.
  2. A **dependency array** (optional) that controls when the effect runs.

### ✅ Basic Example:

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or state changed!");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- Runs **after every render**.
- **Warning:** Can cause **performance issues** if not used properly.

---

## 🔹 Dependency Array in `useEffect`

| Dependency Array | When `useEffect` Runs?                        |
| ---------------- | --------------------------------------------- |
| `[]` (Empty)     | Runs **only once** when the component mounts. |
| `[state]`        | Runs when **specific state/prop changes**.    |
| No array         | Runs **on every render**.                     |

### ✅ Example: Run `useEffect` Only Once (On Mount)

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []); // Empty array → Runs only once
```

### ✅ Example: Run `useEffect` When a State Changes

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]); // Runs only when `count` changes
```

---

## 🔹 Cleaning Up Side Effects

- Some effects (like event listeners, timers, or subscriptions) **need cleanup**.
- `useEffect` can return a **cleanup function** that runs when the component unmounts.

### ✅ Example: Cleanup in `useEffect`

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup function
    console.log("Timer stopped");
  };
}, []);
```

- `clearInterval(timer)` **stops the timer** when the component unmounts.

---

## 🔹 Summary

✅ `useEffect` runs **after the component renders**.\
✅ Used for **side effects** like API calls, event listeners, and timers.\
✅ **Dependency array controls** when `useEffect` runs.\
✅ **Cleanup function** prevents memory leaks.

🚀 `useEffect` makes React components **more powerful and efficient**!

