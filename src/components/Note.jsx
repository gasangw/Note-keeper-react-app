import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import './Note.css'

function Note({ data }) {
  return (
    <>
    <NoteInput data={data}/>
      <div className='notes_holder'>
        {data.map((note)=> {
          return (
            <NoteList  info={note} key={note.id}/>
          )
        })}
      </div>
    </>
  )
}

export default Note