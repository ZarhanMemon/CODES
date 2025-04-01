import { useState } from 'react'
import './App.css'

function App() {

  // const [count, setCount] = useState(0)

  // const handlecount = (count) => {
  //   setCount(count + 1)
  // }

  const handlehover = () => {
    alert('Hovered')
  }

  const handlewheel = () => {
    alert('Wheel')
  }


  const [form, setform] = useState({})

 // IMPORTANT : 1.  we have to use the name attribute in the input form to get the value of the input form 
  //            2.  we have to use the onchange attribute in the input form to get the value of the input form
  
  const handleform = async (e) => {  
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form)


  }



  return (
    <>


{/* 1. Event handler in react */}

      {/* <button onClick={handlecount(count)}>Click me {count}</button> */}

      <button onMouseOver={handlehover}>Hover me</button>

      <button onWheel={handlewheel}>Wheel me</button>



{/* 2.]  INPUT ke handler */}

      {/*Note : if we not use onchange then we cant edit the input form so
      we have to use onchange to edit the input form*/}

      <input type="text" name='name' value={form.name ? form.name : " "} onChange={handleform} />

      <input type="text" name='phone' value={form.phone ? form.phone : " "} onChange={handleform} />

      <input type="text" name='password' value={form.password ? form.password : " "} onChange={handleform} />



    </>
  )
}

export default App
