import React from 'react'

function List(props) {
    const {name, age, image} = props.data
  return (
    <div>
        <h3>{name}</h3>
        <h6>{age}</h6>
        <img src={image} alt='pic' />
    </div>
  )
}

export default List