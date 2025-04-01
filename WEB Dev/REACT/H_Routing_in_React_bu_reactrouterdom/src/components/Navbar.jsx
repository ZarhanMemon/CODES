import React from 'react'

import { Link } from 'react-router-dom'
//or
import { NavLink } from 'react-router-dom'  // u can add classname too

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink className={(e)=>{return e.isActive?"bg-red-500":""}} to="/"><li>Home</li></NavLink>        {/* link will be con vert to Anchor tag will real time */}
                <NavLink className={(e)=>{return e.isActive?"bg-red-500 ":""}} to="/about"><li>About</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"bg-red-500 ":""}} to="/login"><li>Login</li></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
