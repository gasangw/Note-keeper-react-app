import React from 'react'
import pic from '../Image/mypic.png'
import './Home.css'

function Home() {
  return (
    <div className='home_container'>
        <img src={pic} alt="a lady taking notes" className='my-pic' />
    </div>
  )
}

export default Home