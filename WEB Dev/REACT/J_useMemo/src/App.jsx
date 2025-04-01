import './App.css'

import React from 'react'
import { useState, useMemo } from 'react'


const student = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    top: (i === 29_000_000)
  }
})


function App() {

  const [count, setcount] = useState(0)
  const [students, setstudents] = useState(student)

  // const topper = students.find((items) => items.top == true)
  // very long repetative calculation for each render of website so it will crash

  const topper = useMemo(() => students.find((items) => (items.top == true)), [students, {/*count*/ }])  // dependencies cant be the state on which page is rendering like [count]

  // MEMOIZING State which do Expensive computative long task  __
  // usememo - take the long repetative calculation and the state which on changing runs the claculation one time again 


  //   Reference
  //   useMemo(long_calculateValue, dependencies_state) 
  //  
  // Usage
  // Skipping expensive recalculations
  // Skipping re - rendering of components
  // Preventing an Effect from firing too often
  // Memoizing a dependency of another Hook
  // Memoizing a State


  return (
    <>

      <div className="counter">
        <button onClick={() => {
          setcount(count => count + 1)
          {
            if (count == 10) {
              return setstudents([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
                return {
                  index: i,
                  top: (i === 9)
                }
              }
              ))
            }

          }
        }
        }>Count:{count}</button>

        <div className="box">{topper.index}</div>

      </div >

    </>
  )
}

export default App
