# React: Components, Props, and JSX

## Components
Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces.

### Types of Components
1. **Functional Components**
   - These are JavaScript functions that return JSX.
   - Example:
     ```jsx
     function Greeting() {
       return <h1>Hello, World!</h1>;
     }
     ```

2. **Class Components** (Less common in modern React)
   - These are ES6 classes that extend `React.Component` and have a `render` method.
   - Example:
     ```jsx
     class Greeting extends React.Component {
       render() {
         return <h1>Hello, World!</h1>;
       }
     }
     ```

## Props (Properties)
Props allow components to receive data and make them dynamic and reusable.

### Using Props in Functional Components
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />
```

### Using Props in Class Components
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Usage
<Welcome name="Alice" />
```

## JSX (JavaScript XML)
JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

### Example
```jsx
const element = <h1>Hello, World!</h1>;
```

### JSX Rules
- Must have a single parent element:
  ```jsx
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
  ```
  OR
  ```jsx
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
  ```
- Expressions can be embedded using `{}`:
  ```jsx
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
  ```
- Use `className` instead of `class`:
  ```jsx
  <div className="container">Content</div>
  ```

JSX makes React components more readable and easier to write!
