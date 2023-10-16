import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import notesData from "./api/api";

function App() {
  const [notes, setNotes] = useState(notesData);
  return (
    <div className="App">
      <Header />
      <Main notes={notes} />
    </div>
  );
}

export default App;
