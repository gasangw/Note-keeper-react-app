import React from 'react'
import './NoteInput.css'

function NoteInput() {
  return (
    <form className='note_input_container'>
        <input type='text' placeholder='title'/>
        <textarea name="content" id="content" cols="10" rows="4" placeholder='content' />
        <button type='submit'>Add</button>
    </form>
  )
}

export default NoteInput