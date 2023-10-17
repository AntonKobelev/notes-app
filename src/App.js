import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import notesData from "./api/api";
import { toast } from "react-toastify";

function App() {
  const [notes, setNotes] = useState(notesData);

  function handleDelete(note) {
    setNotes(notes.filter((cur) => cur.id !== note.id));
    toast.error("Заметка успешно удалена");
  }

  const handleAddNote = (note) => setNotes((prevState) => [...prevState, note]);

  return (
    <div className="App">
      <Header />
      <Main notes={notes} onDelete={handleDelete} onAdd={handleAddNote} />
    </div>
  );
}

export default App;
