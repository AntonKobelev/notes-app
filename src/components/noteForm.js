// import Note from "./note";

import Note from "./note";

export default function NoteForm({ notes }) {
  return (
    <>
      <div className="note-form">
        <input type="text" id="note-title" placeholder="title"></input>
        <textarea id="note-content" placeholder="notes"></textarea>
        <button id="add-note">Add notes</button>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
    </>
  );
}
