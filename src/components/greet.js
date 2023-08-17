import React from 'react'
import {customStyle } from './DateStyle';
import { showGreetings } from './logic';

function Greeting() {
  return (
    <div>
        <h1 style={customStyle}>{showGreetings()}</h1>
    </div>
  )
}

export default Greeting