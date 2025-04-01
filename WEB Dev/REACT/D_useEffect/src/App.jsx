import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)


  // Case 3: Run only when certain values change
  useEffect(() => {
    alert('Every time when count is changed in App Page')
    setNum(count + 1)

  }, [count])  // } , [count , num , letter])


  


  return (
    <>

      <Navbar num = {num} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
