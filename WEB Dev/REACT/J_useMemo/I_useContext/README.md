# React `useContext()` Hook (MDN-Style Notes)

## Overview

The `useContext()` hook in React is used for managing global state or data that needs to be accessible across multiple components **without prop drilling**.

---

## Why use `useContext()`?

- Simplifies state management when passing data deeply nested in components.
- Avoids **prop drilling**, i.e., passing props through multiple intermediate components unnecessarily.
- Best for small to medium-sized projects or where state management libraries (Redux, Zustand) may be overkill.
- Improves code readability and maintainability.

---

## How `useContext()` Works

### 1. **Create Context:**

```jsx
import { createContext } from 'react';

export const counterContext = createContext();
```

---

### 2. **Wrap Parent Component with Provider:**

```jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import { counterContext } from './Context/context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
      <Navbar />
    </counterContext.Provider>
  );
}

export default App;
```

---

### 3. **Consume Context in Nested Components:**

Example in **Button1.jsx** & **Button2.jsx**

```jsx
import { useContext } from 'react';
import { counterContext } from '../Context/context';

function Button1() {
  const { count, setCount } = useContext(counterContext);

  return (
    <button onClick={() => setCount(count + 1)}>
      Button1 Count: {count}
    </button>
  );
}

export default Button1;
```

Same applies to **Button2.jsx**.

---

## Folder/File Structure Example:

```
├── App.jsx               // Counter state defined, wrapped in Provider
├── Context
│   └── context.js        // Context created
└── components
    ├── Navbar.jsx        // Contains Button1 and Button2
    ├── Button1.jsx       // Uses useContext to access counter
    └── Button2.jsx
```

---

## Alternative: Prop Drilling (Without useContext)

Instead of using `useContext`, you can pass state and functions through props like this:

**App.jsx**

```jsx
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <Navbar count={count} setCount={setCount} />
    </>
  );
}

export default App;
```

**Navbar.jsx**

```jsx
import Button1 from './Button1';
import Button2 from './Button2';

function Navbar({ count, setCount }) {
  return (
    <div>
      I am Navbar Count: {count}
      <Button1 count={count} setCount={setCount} />
      <Button2 count={count} setCount={setCount} />
    </div>
  );
}

export default Navbar;
```

**Button1.jsx & Button2.jsx** will receive `count` and `setCount` through props:

```jsx
function Button1({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Button1 Count: {count}
    </button>
  );
}

export default Button1;
```

---

## Key Differences:

| Feature                                             | useContext()                                      | Prop Drilling                                          |
| --------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Code Cleanliness                                    | Cleaner code when passing data to many components | May clutter intermediate components unnecessarily      |
| Maintainability                                     | Easy to maintain & scale                          | Tedious & hard to manage with deeply nested components |
| State Management                                    | Single source of truth (context)                  | Duplicated logic through multiple layers               |
| Component Coupling                                  | Reduces coupling                                  | Increases coupling                                     |

---

## When to Use What?

- **useContext**: When multiple components (especially deeply nested ones) need access to the same state or functions.
- **Prop Drilling**: When only 1 or 2 child components require access to the state, and the structure is not deeply nested.

---

## Best Practices:

- **Separate Context Logic:** Keep context creation in a separate file for better organization.
- **Avoid Overusing Context:** For frequently changing, performance-critical data, use local state or advanced state managers (like Redux/Zustand).
- **Combine with Custom Hooks:** Abstract `useContext` logic into custom hooks for better code reusability and readability.

---

## Final Takeaway:

✅ `useContext()` **simplifies state sharing across multiple components**.

✅ Use **prop drilling** only when your component tree is shallow and doesn't require frequent access to the same state.

✅ Avoid unnecessary prop chains and improve code scalability using `useContext()` wisely.

✅ Combine `useContext()` with custom hooks and modular folder structures for best results.

---