# Conditional Rendering & Rendering Lists in React (Notes)

## 🔹 What is Conditional Rendering?

- Conditional Rendering means showing **different UI elements** based on **certain conditions**.
- React renders components based on **state, props, or logical conditions**.

---

## 🔹 Methods of Conditional Rendering

### 1️⃣ **Using `if` Statement**

- The standard way to render components conditionally.
- **Example:**
  ```jsx
  function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Please sign in</h1>;
    }
  }
  ```

### 2️⃣ **Using Ternary Operator (`? :`)**

- Shorter syntax for conditional rendering.
- **Example:**
  ```jsx
  function Greeting({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>;
  }
  ```

### 3️⃣ **Using `&&` (Logical AND Operator)**

- Useful when rendering something **only if a condition is true**.
- **Example:**
  ```jsx
  function Notification({ hasNewMessages }) {
    return (
      <div>
        <h1>Inbox</h1>
        {hasNewMessages && <p>You have new messages!</p>}
      </div>
    );
  }
  ```

### 4️⃣ **Using Switch Statement (For Multiple Conditions)**

- Useful when dealing with **multiple cases**.
- **Example:**
  ```jsx
  function Status({ status }) {
    switch (status) {
      case "loading":
        return <p>Loading...</p>;
      case "success":
        return <p>Data loaded successfully!</p>;
      case "error":
        return <p>Error fetching data.</p>;
      default:
        return <p>Unknown status</p>;
    }
  }
  ```

---

## 🔹 Rendering Lists in React

- React can **dynamically generate** multiple elements using **arrays and `.map()`**.
- **Each item in a list needs a unique `key`**.

### ✅ Example: Rendering a List of Items

```jsx
function TodoList() {
  const [todo_info, setTodoinfo] = useState([
    { id: 1, title: "Go to Market", desc: "I am todo market", color: "red" },
    { id: 2, title: "Go to School", desc: "I am todo school", color: "blue" },
    { id: 3, title: "Go to College", desc: "I am todo college", color: "yellow" },
    { id: 4, title: "Go to Home", desc: "I am todo home", color: "green" },
    { id: 5, title: "Go to Park", desc: "I am todo park", color: "pink" }
  ]);

  return (
    <div>
      {todo_info.map((todo) => (
        <div key={todo.id} className={`m-3 p-1 border text-${todo.color}-500`}>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
      ))}
    </div>
  );
}
```

- `map()` is used to **iterate over an array** and generate elements.
- `key` helps React **identify and optimize** list items.

### ✅ Example: Conditional Rendering in a List

```jsx
function TodoList() {
  const [showTodos, setShowTodos] = useState(true);
  const todos = [
    { id: 1, title: "Go to Market", desc: "I am todo market", color: "red" },
    { id: 2, title: "Go to School", desc: "I am todo school", color: "blue" }
  ];

  return (
    <div>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Hide Todos" : "Show Todos"}
      </button>

      {showTodos && (
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className={`m-3 p-1 border text-${todo.color}-500`}>
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 🔹 Problem: Tailwind and Dynamic Class Names

- Tailwind **removes unused styles** during build time.
- If a class name is **dynamically generated**, like:
  ```jsx
  <div className={`bg-${color}-500`}>Hello</div>
  ```
  Tailwind **does not see** `bg-red-500`, `bg-blue-500`, etc., in the JSX **at build time**, so it removes them.
- However, static class names like:
  ```jsx
  <div className="bg-red-500">Hello</div>
  ```
  **will work** because Tailwind detects and keeps them.
- **Solution:** Use a fixed list of colors in Tailwind’s `safelist` or handle classes dynamically with inline styles:
  ```jsx
  <div style={{ backgroundColor: todo.color }}>Hello</div>
  ```

---

## 🔹 Key Takeaways

✅ **Conditional Rendering** allows showing UI based on conditions using `if`, `? :`, `&&`, and `switch`.
✅ **Lists are rendered using `.map()`, and each item must have a unique `key`**.
✅ **Combining Conditional Rendering with Lists** makes React components more dynamic.
✅ **Tailwind removes dynamically generated class names unless explicitly written in the JSX**.

🚀 Mastering these concepts helps build **efficient, interactive UIs** in React!

