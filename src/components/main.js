import NoteForm from "./noteForm";

export default function Main({ notes }) {
  return (
    <main>
      <NoteForm notes={notes} />
    </main>
  );
}
