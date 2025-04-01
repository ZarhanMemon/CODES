import { useState, useEffect, useRef } from 'react'
import './App.css'
function App() {
    const [count, setCount] = useState(0)

    let non_persistant_a = 0
    let persistant_a = useRef(0)

    useEffect(() => {
        
        non_persistant_a = non_persistant_a + 1
        persistant_a.current = persistant_a.current + 1

        console.log(`a_nonref:${non_persistant_a} and a_ref: ${persistant_a.current}`);
    })

    return (<>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count} </button>
        </div> </>)
}
export default App