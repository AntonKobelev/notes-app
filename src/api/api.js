import { v4 as uuidv4 } from "uuid";

const notesData = [
  {
    id: uuidv4(),
    title: "Заметка 1",
    text: "Это текст первой заметки.",
  },
  {
    id: uuidv4(),
    title: "Заметка 2",
    text: "Это текст второй заметки.",
  },
  {
    id: uuidv4(),
    title: "Заметка 3",
    text: "Это текст третьей заметки.",
  },
];

export default notesData;
