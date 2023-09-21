import React from 'react';
import './Header.css'
import NoteInput from './NoteInput';

function Header() {
  return (
      <>
         <div className='head__background'>
           <h3 className='head__title'>Note Keeper</h3>
        </div>
        <NoteInput />
      </>
  )
}

export default Header