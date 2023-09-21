import React from 'react'

function NoteList(props) {
    const {id, title, content} = props.info
  return (
      <div className='note_container' key={id}>
        <div className='card_note'>
        <h2 className='note_title'>{title}</h2>
        <p className='note_text'>{content}</p>
        </div>
      </div>
  )
}

export default NoteList