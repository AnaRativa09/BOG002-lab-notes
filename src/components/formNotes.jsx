import React, { useState } from 'react';

import { useAuth } from '../controller/authContext';
import { handleInput } from '../controller/formHandles';
import { saveNote } from '../controller/firebaseFirestore';

export default function FormNotes() {
  const { currentUser } = useAuth();

  const initialValueNotes = {
    title: '', description: '', date: '', uid: '',
  };
  const [note, setNote] = useState(initialValueNotes);
  const [error, setError] = useState(null);

  // setNote({ ...note, date: new Date(), uid: currentUser.uid });

  const saveData = (e) => {
    e.preventDefault();
    saveNote('notes', note)
      .then(() => {
        setNote(initialValueNotes);
        document.getElementById('noteForm').reset();
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(''), 2000);
      });
  };

  return (
    <>
      <form onSubmit={saveData} id="noteForm">
        <label htmlFor="title">
          <input
            id="title"
            type="text"
            placeholder="Título"
            value={note.title}
            onChange={(e) => { handleInput(e, note, setNote); }}
            required
          />
        </label>

        <textarea
          id="description"
          className="descriptionNote"
          name="description"
          placeholder="Descripción"
          value={note.description}
          onChange={(e) => { handleInput(e, note, setNote); }}
        />

        {error && (<p className="error">{`Error: ${error}`}</p>)}

        <button type="submit">Crear nota</button>
      </form>
    </>
  );
}
