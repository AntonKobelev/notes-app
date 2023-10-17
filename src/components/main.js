import NoteForm from "./noteForm";

export default function Main({ notes, onDelete, onAdd }) {
  return (
    <main>
      <NoteForm notes={notes} onDelete={onDelete} onAdd={onAdd} />
    </main>
  );
}
