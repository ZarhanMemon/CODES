# Handling Events in React (MDN Notes)

## 🔹 Introduction to Event Handling in React

- React **handles events** similarly to the standard **DOM** but with some differences:
  - Events are wrapped in **Synthetic Events** for cross-browser compatibility.
  - Event handlers are added using **camelCase** (`onClick` instead of `onclick`).
  - Functions must be passed as references (`onClick={handleClick}`), not invoked (`onClick={handleClick()}`) directly.

---

## 🔹 Adding Event Listeners

### ✅ Example: Handling Mouse Events

```jsx
function App() {
  const handleHover = () => {
    alert('Hovered');
  };

  const handleWheel = () => {
    alert('Wheel Event Triggered');
  };

  return (
    <>
      <button onMouseOver={handleHover}>Hover me</button>
      <button onWheel={handleWheel}>Wheel me</button>
    </>
  );
}
```

### Explanation:

- `onMouseOver` triggers when the mouse hovers over the button.
- `onWheel` triggers when scrolling over the button.

---

## 🔹 Handling Form Events

### ✅ Example: Handling Input Changes

```jsx
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({});

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <input type="text" name="name" value={form.name || ""} onChange={handleInputChange} />
      <input type="text" name="phone" value={form.phone || ""} onChange={handleInputChange} />
      <input type="password" name="password" value={form.password || ""} onChange={handleInputChange} />
    </>
  );
}
```

### Explanation:

- `onChange` captures user input dynamically.
- `name` attribute links each input field to the `form` state.
- Without `onChange`, React forms become **read-only**.

---

## 🔹 Common Mistake: Passing Function Calls Instead of References

❌ **Incorrect:**

```jsx
<button onClick={handleClick()}>Click me</button>
```

- This **executes immediately** instead of waiting for a click.

✅ **Correct:**

```jsx
<button onClick={handleClick}>Click me</button>
```

- Here, `handleClick` runs **only when clicked**.

---

## 🔹 Key Takeaways

✅ Use **camelCase** for event handlers (`onClick`, `onChange`).
✅ Pass functions as **references**, not **calls** (`onClick={func}`).
✅ `onChange` is required for editable form inputs.
✅ React uses **Synthetic Events** for cross-browser consistency.

🚀 Mastering event handling is crucial for building interactive React applications!

