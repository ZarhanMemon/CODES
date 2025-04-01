import React, { useContext } from 'react'
import { counterContext } from '../Context/context'

function Button1() {
const {count , setCount} = useContext(counterContext)

  return (
    <>
      <button onClick={() => { setCount(0) }}>Reset:{count}</button>    
    
    </>
  )
}

export default Button1
