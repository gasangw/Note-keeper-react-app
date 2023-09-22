import React from 'react';
import NoteList from './NoteList';
import './Note.css'

function Note({ data, deleteNotesCard }) {
  return (
    <>
      <div className='notes_holder'>
        {data.map((note, index)=> {
          return (
            <NoteList  info={note} key={index} id={index} deleteNotesCard={deleteNotesCard}/>
          )
        })}
      </div>
    </>
  )
}

export default Note