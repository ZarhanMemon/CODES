import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className='card'>

            <div class="img">
                <img width="178" height="110" src={props.ImgSrc} alt="error" />
            </div>

            <div class="nav">
                <span>{props.adj1}</span>
                <span>{props.adj2}</span>
            </div>

            <div class="content">
                <h3>{props.Title}</h3>
                <p>{props.Des}</p>
            </div>

            <div class="button">
                <a href={props.desLink}><button>Read more</button></a>
            </div>

        </div>
    )
}

export default Card
