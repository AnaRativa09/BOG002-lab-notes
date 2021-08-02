import React, { useState } from 'react';
import { saveNote } from '../controller/firestore';

export default function Dashboard() {
  const initialValueNotes = { title: '', description: '' };
  const [note, setNote] = useState(initialValueNotes);

  const handleInputChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    saveNote('notes', note);
    setNote(initialValueNotes);
    alert('Nota guardada');
    document.getElementById('noteForm').reset();
  };

  return (
    <>
      <h2>Aquí ves y creas notas</h2>

      <form onSubmit={saveData} id="noteForm">
        <label htmlFor="title">
          <input id="title" type="text" placeholder="Título" value={note.title} onChange={handleInputChange} required />
        </label>

        <textarea id="description" className="descriptionNote" name="description" placeholder="Descripción" value={note.title} onChange={handleInputChange} />

        <button type="submit">Crear nota</button>
      </form>
    </>
  );
}
