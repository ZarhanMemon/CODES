import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

import { counterContext } from './Context/context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{ count, setCount } }>

        <button onClick={() => setCount((count) => count + 1)}>
          Increament: {count}
        </button>

        <Navbar />

      </counterContext.Provider >
    </>
  )
}

export default App
