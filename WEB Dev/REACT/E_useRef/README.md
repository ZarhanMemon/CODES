# The `useRef` Hook in React (Notes)

## 🔹 What is `useRef`?
- `useRef` is a **React Hook** that creates a **mutable reference object**.
- It **does not cause re-renders** when updated.
- Can be used to **reference DOM elements** or store **persistent values** across renders.

---

## 🔹 How to Use `useRef`
- `useRef` returns an object: `{ current: initialValue }`
- You can access or modify `ref.current` **without triggering a re-render**.

### ✅ Basic Example: Accessing a DOM Element
```jsx
import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null); // Creating a reference

  useEffect(() => {
    inputRef.current.focus(); // Focuses the input field on mount
  }, []);

  return <input ref={inputRef} type="text" placeholder="Focus on me!" />;
}
```
- `useRef(null)` creates a reference.
- `inputRef.current.focus()` focuses the input when the component mounts.

---

## 🔹 Use Cases of `useRef`
### 1️⃣ **Accessing DOM Elements**
- `useRef` is often used to **directly interact with the DOM**.
- Example: Focusing an input field, scrolling, or managing animations.

### 2️⃣ **Storing Mutable Values Without Re-renders**
- Unlike `useState`, `useRef` **does not cause re-renders** when updated.
- Useful for storing **previous values, timers, or event listeners**.

### ✅ Example: Storing Previous State
```jsx
import { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Creating a reference

  useEffect(() => {
    prevCountRef.current = count; // Storing the previous count
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- `prevCountRef.current` stores the **previous value** of `count`.
- **Does not trigger re-renders** like `useState`.

### 3️⃣ **Handling Timers and Intervals**
- `useRef` is useful for storing **timer IDs** in `setTimeout` or `setInterval`.

### ✅ Example: Managing a Timer
```jsx
import { useRef, useState } from "react";

function Timer() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Time: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```
- `timerRef.current` stores the timer ID.
- Prevents **unnecessary re-renders** while handling intervals.

---

## 🔹 Important Points from Documentation
- `useRef` returns `{ current: initialValue }`.
- Updating `ref.current` **does not cause a re-render**.
- `useRef` is useful for **storing mutable values** between renders.
- Common use cases include **DOM manipulation, storing previous state, and handling timers**.

---

## 🔹 Summary
✅ `useRef` provides a way to **store values persistently** without causing re-renders.  
✅ Useful for **DOM manipulation, storing previous state, and managing timers**.  
✅ Unlike `useState`, **changing `ref.current` does not trigger a component re-render**.  
✅ Ideal for **handling side effects that do not require re-rendering the UI**.  

🚀 `useRef` is a powerful tool for improving React performance and handling advanced cases!

