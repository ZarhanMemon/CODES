import React from 'react'
import { memo } from 'react'

 
function Navbar(props) {


    console.log("Navbar is rendering on its one of or all props changes")


  return (<> 
    <div>I am Navbar :{props.verb} </div>
    <button onClick={props.changeVerb
    }>Click to verb</button>
    </>
  )
}

export default memo(Navbar) // only render once and if props changes also 