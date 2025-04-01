import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [verb, setverb] = useState("GOOD")


  //useMemo - Meomoizes the STATE - AS I DO TO MEMO THE NAVBAR COMPUNENT

  // const verb = useMemo(() => first, [second])



  //useCallback - Meomoizes the FUNCTION which is constant not changes acc to other state

  // const changeVerb = ()=>{
  //   return setverb("Hey I AM BAD")
  // }



  const changeVerb = useCallback(
    () => {
      return (setverb(`Hey I AM BADD `))

    },
    [], //dependency array - if these change then unfreeze it 
    //now it will always render if count change and it also when verb changes as if it is they 
    // are props of Navbar
  )




  //The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.


  return (
    <>
      <Navbar
        verb={verb}
        changeVerb={changeVerb}
      />

      <button onClick={() => {
        setCount(count + 1)
      }}>Count:{count}</button>
    </>
  )
}

export default App
