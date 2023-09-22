import React, { useState } from 'react'
import './NoteInput.css'

function NoteInput({onAddNote}) {
   const [myContent, setMyContent] = useState({
    title: '',
    content: ''
   })

   const [error, setError] = useState(false)

    const handleChange =(e) =>{
        const { name, value} = e.target
      setMyContent((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
      })
      setError(false)
    }

    const submitForm =(e)=>{
        e.preventDefault()
        if(myContent.title === '' ||  myContent.content === ''){
          setError(!error)
          return;
        } else {
          onAddNote(myContent)  
          setMyContent({
            title: '',
            content: ''
           }) 
        }  
    }
  return (
    <>
      <form className='note_input_container'>
          <input name='title' type='text' value={myContent.title} placeholder='title' onChange={handleChange }/>
          <textarea name="content" value={myContent.content}  id="content" onChange={handleChange } cols="10" rows="4" placeholder='content' />
          <button type='submit' onClick={submitForm}>Add</button>
      </form>
      {error && <p className='error'>Please kindly fill all the inputs with some content!!!</p>}
    </>
  )
}

export default NoteInput