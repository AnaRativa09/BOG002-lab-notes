import React, { useState } from 'react';
import handleInput from '../controller/formHandles';
import { saveNote } from '../controller/firestore';

export default function ormNotes() {
  const initialValueNotes = { title: '', description: '' };
  const [note, setNote] = useState(initialValueNotes);

  const saveData = (e) => {
    e.preventDefault();
    saveNote('notes', note)
      .then(() => {
        setNote(initialValueNotes);
        document.getElementById('noteForm').reset();
      })
      .catch((error) => { console.error(error); });
  };

  return (
    <>
      <form onSubmit={saveData} id="noteForm">
        <label htmlFor="title">
          <input id="title" type="text" placeholder="Título" value={note.title} onChange={(e) => { handleInput.onChange(e, note, setNote); }} required />
        </label>

        <textarea id="description" className="descriptionNote" name="description" placeholder="Descripción" value={note.description} onChange={(e) => { handleInput.onChange(e, note, setNote); }} />

        <button type="submit">Crear nota</button>
      </form>
    </>
  );
}
