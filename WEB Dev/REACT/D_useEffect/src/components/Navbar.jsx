
import React from 'react'
import {useEffect } from 'react'




const Navbar = (props) => {


    // Case 1: Run on every render
    useEffect(() => {
        alert('When Nav Page is Reloaded every time it show Alert')
    })


    // Case 2: Run only on first render on the staring of the page
    useEffect(() => {
        alert('When Nav Page is Reloaded First time it show Alert only one time')
    }, [])


    // Case 3: Run only when certain values change
    useEffect(() => {
        alert('Every time when num is changed in navbar')

    }, [props.num])  // } , [count , num = props.color , letter])

    // Example of Cleanup function
    useEffect(() => {
        alert("Hey welcome to my nav page. ")

        return () => {
            alert("component navbar was unmounted")
        }
    }, [])


    return (
        <>

            <h1>Number:{props.num}</h1>

        </>
    )
}

export default Navbar
