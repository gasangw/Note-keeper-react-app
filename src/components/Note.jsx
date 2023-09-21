import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import './Note.css'

function Note({ data,onAddNote, deleteNotesCard }) {
  return (
    <>
    <NoteInput onAddNote={onAddNote} />
      <div className='notes_holder'>
        {data.map((note)=> {
          return (
            <NoteList  info={note} key={note.id} deleteNotesCard={deleteNotesCard}/>
          )
        })}
      </div>
    </>
  )
}

export default Note