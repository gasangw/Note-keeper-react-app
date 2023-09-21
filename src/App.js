
import Header from "./components/Header";
import Note from "./components/Note";
import { Footer } from "./components/Footer";
import Notes from "./components/NoteData";

function App() {
  return (
    <div className="App">
      <Header/>
      <Note  data={Notes}/>
      <Footer />
    </div>
  );
}

export default App;
