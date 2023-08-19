import React from 'react';
import './Footer.css'

export const Footer = () => {
    let date = new Date();
    let currentYr = date.getFullYear()
  return (
    <div className='copy__right'>
        <p>Copyright &copy; {currentYr}</p>
    </div>
  )
}
