import React from 'react';
import Notes from './NoteData';
import NoteList from './NoteList';
import './Note.css'

function Note() {
  return (
    <div className='notes_holder'>
      {Notes.map((note)=> {
        return (
          <NoteList  data={note} />
        )
      })}
    </div>
  )
}

export default Note