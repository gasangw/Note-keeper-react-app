
import Header from "./components/Header";
import Note from "./components/Note";
import { useState  } from "react";
import { Footer } from "./components/Footer";
import Notes from "./components/NoteData";

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
      <Note  data={notes} onAddNote={addNote} deleteNotesCard={deleteNotesCard}/>
      <Footer />
    </div>
  );
}

export default App;
