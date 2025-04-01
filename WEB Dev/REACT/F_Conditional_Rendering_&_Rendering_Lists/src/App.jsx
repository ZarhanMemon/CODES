import { useState } from 'react'
import './App.css'

function App() {


  const [show, setShow] = useState(true)
  const [show1, setshow1] = useState(false)

  const [todo_info, setTodoinfo] = useState([        
    {
      id: 1,
      title: "Go to Market",
      desc: "i am todo market",
      color: "red"
    },
    {
      id: 2,
      title: "Go to School",
      desc: "i am todo school",
      color: "blue"
    },
    {
      id: 3,
      title: "Go to College",
      desc: "i am todo college",
      color: "yellow"
    },
    {
      id: 4,
      title: "Go to Home",
      desc: "i am todo home",
      color: "green"
    },
    {
      id: 5,
      title: "Go to Park",
      desc: "i am todo park",
      color: "pink"
    }
  ])


  // Note : if u want small component in ur code not suitable make a component and use it in folder  

  const Todo = (props) => {
    return (
      <>
        <div className={`m-3 p-1 border text-${props.color}-500`} key={props.id}>  
          {/*props.color is not recognize by tailwind as if its not Statical classname */}

          <div key="title">{props.title}</div>
          <div key="desc">{props.desc}</div>
        </div>

      </>
    )
  }




  return (

    <>
      {/* 1] --- TERNARY operator = if_else like */}

      {show ? <button onClick={() => setshow1(!show1)}>I will go if Toggle is {`${show1}`}</button> : null} {/*if toggle is clicke change the show value  */}





      <div className="card">


        {/* 2] --- Conditional Rendering = if like */}

        {show1 && <button onClick={() => setShow(!show)}>Toggle : {`${show}`}</button>} {/*if toggle is clicke change the show value  */}



        {
          todo_info.map((props) => {
            return <Todo color="red" key={props.id} title={props.title} desc={props.desc} />

         {/*OR 
          2 way drectly without component --> 
                    return (
                      <>
                      <div className={`m-3 p-1 border bg-${props.color}-500`} key={props.id}>
                        <div key="title">{props.title}</div>
                        <div key="desc">{props.desc}</div>
                      </div>

                      </>
                      ) */
          }
    
    
{/* Tailwind does not recognize `text-${props.color}-500` because it only detects static class names at build time.  
    Since `props.color` is dynamic, Tailwind cannot pre-generate the class, making it ineffective. 
    
     ✅ This works (static class name): `text-red-500`
     ❌ This fails (dynamic class name): `text-${props.color}-500`
       
  To fix this, use a predefined color mapping object or safelist the possible colors in Tailwind config[make array of color eg text-red-500 == red]. 

*/}
          

          })}

        {/*Note: above here u should give a key[ID,SR.NO] to the parent div of the map function*/}

      </div>

    </>
  )
}

export default App
