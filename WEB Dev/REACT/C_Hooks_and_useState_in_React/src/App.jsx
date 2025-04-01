import { useState } from 'react'
import './App.css'  
 

function App() {

  
  const [count, setCount] = useState(10)  
 // 1. Hooks function - useState() is used to create a state variable and a function to update it.

  return (
    <>
     <div>The counter is {count} </div>  {/*State variable */}

     <button onClick={()=>{setCount( count -1)}}>Click me!</button>   {/*State Function */}
     
    </>
  )
}

export default App
