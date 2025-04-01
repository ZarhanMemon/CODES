import { useState, useEffect } from 'react'
import Navbar from './Navbar'

import './App.css'

function App() {

  const [card_info, setcard_info] = useState([])

  useEffect(()=>{const Data = async () => {

    const a = await fetch('https://jsonplaceholder.typicode.com/posts')
    const b = await a.json()
    return setcard_info(b)
  };
  Data();

  },[])



  const Cards = (props) => { 
    return (
      <div className="card w-64 h-40 p-4 m-3 border border-gray-300 rounded-lg shadow-lg flex flex-col overflow-hidden " key={props.id} >
        <h4 className='text-lg font-bold truncate' key="title">{props.title}</h4>
        <p className="text-sm overflow-auto flex-1" key="body">{props.body}</p>
        <span key="userId">{`By: UserId: ${props.userId}`} </span>
      </div>
    )
  }


  return (
    <>

      <Navbar />

      <div className="container p-5 m-5 flex flex-wrap">

        {card_info.map((props) => {
          return <Cards key={props.key_id} title={props.title} body={props.body} userId={props.userId} />
        })}

      </div>

    </>
  )
}

export default App
