export default function Note({ note, onDelete }) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <button className="delete-button" onClick={() => onDelete(note)}>
        Delete
      </button>
    </div>
  );
}
