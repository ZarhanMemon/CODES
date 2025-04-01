import React, { useState, useEffect, useRef } from 'react'
import './App.css'

const App_1 = () => {

  const [count, setCount] = useState(0)

  const colors = ['red', 'blue', 'green', 'orange', 'purple']


  const ref = useRef()
  const cardref = useRef()  // this is a persistant reference

  useEffect(() => {
    alert('count is changed...')


    ref.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

  }, [count])

  return (
    <>
      <div ref={cardref} className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <button onClick={()=> cardref.current.style.display = 'none'}>CliCK ME to hide counter</button>
      <button onClick={()=> cardref.current.style.display = 'block'}>CliCK ME to unhide it</button>
    </>
  )
}

export default App_1