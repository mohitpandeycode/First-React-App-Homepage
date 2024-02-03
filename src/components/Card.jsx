import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src='https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg'
        style={{width:"198px",border:"1px solid red",borderRadius:"10px"}}></img>
        <h2 >{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}
 
export default Card