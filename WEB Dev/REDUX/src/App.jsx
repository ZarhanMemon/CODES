import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'


import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multiply , restart } from './redux/count/countSlice'


function App() {
  // const [count, setCount] = useState(0)

  const counter = useSelector((state) => state.count.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar  />
      <div className="card">
        <button  >
          count is {counter}
        </button>

        <button onClick={()=>dispatch(increment())}>
          Increament +
        </button>

        <button onClick={()=>dispatch(decrement())}>
          Decreament -
        </button>

        <button onClick={()=>dispatch(multiply())}>
          Multiply *
        </button>

        <button onClick={()=>dispatch(restart())}>
          Restart 
        </button>
     
      </div>
    
    </>
  )
}

export default App
