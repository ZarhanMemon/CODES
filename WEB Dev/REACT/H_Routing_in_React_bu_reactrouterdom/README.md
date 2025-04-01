# React Router: Routing in React

React Router is a popular library used for routing in React applications. It enables dynamic routing, allowing the UI to update according to the URL, without refreshing the page.

## Installation

```bash
npm install react-router-dom
```

## Core Components

### 1. `createBrowserRouter` & `RouterProvider`
- `createBrowserRouter`: Creates a router instance with route definitions.
- `RouterProvider`: Provides the router to the React application.

### Example Usage

```jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Navbar from './components/Navbar';
import User from './components/User';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

### 2. Route Definitions
- Each route is defined as an object inside `createBrowserRouter`.
- Props:
  - `path`: URL path.
  - `element`: React components to render.

### 3. Dynamic Routes
- Example: `/user/:username`
- `:username` is a dynamic segment.

Access it using `useParams`:

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();
  return <h1>Welcome, {username}!</h1>;
}
```

## Navigation Links

### 4. `<Link>` & `<NavLink>`
- Used to navigate between routes without reloading the page.
- `NavLink` provides styling capabilities to highlight the active link.

### Example Navbar Component

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e) => e.isActive ? "bg-red-500" : ""} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={(e) => e.isActive ? "bg-red-500" : ""} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={(e) => e.isActive ? "bg-red-500" : ""} to="/login">
          <li>Login</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
```

### Key Points
- `NavLink` behaves like an `<a>` tag but prevents full-page reloads.
- `className` can be dynamically assigned based on whether the link is active using `isActive` property.

## Key Components Summary

| Component             | Purpose                                                                                     |
|----------------------|---------------------------------------------------------------------------------------------|
| `createBrowserRouter`| Defines routes and returns a router object.                                                  |
| `RouterProvider`     | Wraps the app, providing the router instance.                                                |
| `Navbar`             | Common component rendered in each route for navigation.                                      |
| `Link` / `NavLink`   | Navigation components for SPA without reloading; `NavLink` supports active styling.           |
| `useParams`          | Hook used to access dynamic URL parameters.                                                  |

## Key Benefits
- SPA-friendly navigation.
- Dynamic routing with parameter support.
- Declarative and customizable routing structure.
- Simplified navigation and parameter handling.
- Active link highlighting using `NavLink`.

