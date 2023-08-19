import React from 'react'
import './Note.css'

function Note() {
  return (
    <div className='note_container'>
       <div className='card_note'>
       <h2 className='note_title'>This is the title</h2>
         <p className='note_text'>This is the content</p>
       </div>
    </div>
  )
}

export default Note