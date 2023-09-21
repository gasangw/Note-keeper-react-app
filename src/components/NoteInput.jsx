import React, { useState } from 'react'
import './NoteInput.css'

function NoteInput({data}) {
     const [title, setTitle] = useState('')
     const [content, setContent] = useState('')
     const [myData, setMyData] = useState([...data])

     function handleTitle(e){
        setTitle(e.target.value)
     }

     function handleContent(e){
        setContent(e.target.value)
     }

     const handleFormInputs =(e)=>{
        e.preventDefault()
        setMyData(prevState => [...prevState, {title, content}])

        setTitle('')
        setContent('')
        
     }
  return (
    <form className='note_input_container'>
        <input name='title' type='text' placeholder='title' onChange={handleTitle}/>
        <textarea name="content" id="content" onChange={handleContent} cols="10" rows="4" placeholder='content' />
        <button type='submit' onClick={handleFormInputs}>Add</button>
    </form>
  )
}

export default NoteInput