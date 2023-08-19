import React from 'react'

function Friends(props) {
  return (
    <div>
        <h3>{props.name}</h3>
        <h6>{props.age}</h6>
        <img src={props.image} alt='pic' />
    </div>
  )
}

export default Friends