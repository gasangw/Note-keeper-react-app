import React, {useState} from 'react'

function Time() {
    let date = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(date)
   

    const changeTime = () =>{
        setCurrentTime(new Date().toLocaleTimeString())
    }

   setInterval(changeTime, 1000)
    
  return (
    <div>
        <h1>{currentTime}</h1>
        <button>Get Time</button>
    </div>
  )
}

export default Time