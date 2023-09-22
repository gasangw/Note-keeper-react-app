
import Header from "./components/Header";
import Note from "./components/Note";
import { useState  } from "react";
import { Footer } from "./components/Footer";
import Notes from "./components/NoteData";
import Home from "./components/Home";
import NoteInput from './components/NoteInput'
import {Route, Routes} from 'react-router-dom'

function App() {
 const [notes, setNotes] = useState([...Notes])

 function addNote(note){
    setNotes(prevState => [...prevState, note])
 }

 function deleteNotesCard(Id){
    setNotes((prevState) => {
      return prevState.filter((item, index)=> index !== Id)
    })
 }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/add' element={ <NoteInput  onAddNote={addNote}/>} />
        <Route path='/all-notes' element={ <Note  data={notes} deleteNotesCard={deleteNotesCard}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
