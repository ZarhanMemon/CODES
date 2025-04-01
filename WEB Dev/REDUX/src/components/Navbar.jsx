import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multiply , restart } from '../redux/count/countSlice'


function Navbar() {

    const counter = useSelector((state) => state.count.value)
    const dispatch = useDispatch


  return (
    <div>I am count {counter} </div>
  )
}

export default Navbar;