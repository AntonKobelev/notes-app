import { useState } from "react";
import Note from "./note";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NoteForm({ notes, onDelete, onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  function createNewNote() {
    const newNote = {
      id: uuidv4(),
      title: title,
      text: text,
    };
    onAdd(newNote);
    toast.success("Заметка успешно добавлена");
    setTitle("");
    setText("");
  }
  return (
    <>
      <div className="note-form">
        <input
          type="text"
          id="note-title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          id="note-content"
          placeholder="notes"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button id="add-note" onClick={() => createNewNote()}>
          Add notes
        </button>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <Note note={note} key={note.id} onDelete={onDelete} />
        ))}
      </div>
      <ToastContainer />
    </>
  );
}
