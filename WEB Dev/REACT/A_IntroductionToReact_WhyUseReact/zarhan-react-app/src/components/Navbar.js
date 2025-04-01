import React from 'react'

const Navbar = (props) => {
    return (
        <div className='Navbar' style={{ backgroundColor: props.bgColor , color:props.textColor }} >

            <ul>
                <li>Home</li>
                <li>Page</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar