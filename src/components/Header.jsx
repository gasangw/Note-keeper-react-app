import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <>
         <div className='head__background'>
              <h3 className='head__title'>Note Keeper <br/><p className='logo'>Your compass to organized success</p></h3>
           <div className='nav_links'>
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/add'>Add Notes</NavLink>
             <NavLink to='/all-notes'>All Notes</NavLink>
           </div>
        </div>
      </>
  )
}

export default Header