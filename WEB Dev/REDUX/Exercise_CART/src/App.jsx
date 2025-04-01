

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount, decrementByAmount } from './redux/cart/cartSlice'
import { incrementb1, decrementb1 } from './redux/boxes/box1Slice'
import { incrementb2, decrementb2 } from './redux/boxes/box2Slice'
import { incrementb3, decrementb3 } from './redux/boxes/box3Slice'



function App() {
  const cart = useSelector((state) => state.cart.value)
  const box1_count = useSelector((state) => state.box1.value)
  const box2_count = useSelector((state) => state.box2.value)
  const box3_count = useSelector((state) => state.box3.value)



  const dispatch = useDispatch()

  return (
    <>

      <div className="card">

        <div className="box1">
          <button onClick={() => {
            dispatch(decrementByAmount(100))
            dispatch(decrementb1())
          }}>-</button>
          <span>box1 - 100$</span>
          <button onClick={() => {
            dispatch(incrementByAmount(100))
            dispatch(incrementb1())
          }}>+</button>
        </div>


        <div className="box2">
          <button onClick={() => {
            dispatch(decrementByAmount(2400))
            dispatch(decrementb2())
          }}>-</button>
          <span>box2 - 2400$</span>
          <button onClick={() => {
            dispatch(incrementByAmount(2400))
            dispatch(incrementb2())
          }}>+</button>
        </div>

        <div className="box3">
          <button onClick={() => {
            dispatch(decrementByAmount(320))
            dispatch(decrementb3())
          }}>-</button>
          <span>box3 - 320$</span>
          <button onClick={() => {
            dispatch(incrementByAmount(320))
            dispatch(incrementb3())
          }}>+</button>
        </div>


      </div>
      <div className="cart">
        <h1> Cart : {(cart >= 0) ? cart : "0"} $</h1>

       <p>  box1- {(box1_count >= 0) ? box1_count : "0"} </p>
       <p>  box2- {(box2_count >= 0) ? box2_count : "0"} </p>
       <p>  box3- {(box3_count >= 0) ? box3_count : "0"} </p>

      </div>
    </>
  )
}

export default App
