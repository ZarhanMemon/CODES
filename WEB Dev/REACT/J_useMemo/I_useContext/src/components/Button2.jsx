import React from 'react'

import { useContext } from 'react'
import { counterContext } from '../Context/context'

function Button2() {

  const {count , setCount} = useContext(counterContext)

  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decreament :{count}</button> 
    </>
  )
}

export default Button2
