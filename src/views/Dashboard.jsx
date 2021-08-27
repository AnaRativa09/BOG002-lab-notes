import React, { useState, useEffect } from 'react';
import { getNotes } from '../controller/firestore';
import FormNotes from '../components/formNotes';

import '../styles/Dashboard.css';

export default function Dashboard() {
  const [dataNotes, setDataNotes] = useState([]);

  useEffect(() => {
    getNotes('notes', setDataNotes);
  }, []);

  return (
    <>
      <h2>Aquí ves y creas notas</h2>

      <FormNotes />

      {
        dataNotes.map((dataNote) => (
          <div key={dataNote.id} className="note-container">
            <h3>{ dataNote.title }</h3>
            <p>{ dataNote.description }</p>
          </div>
        ))
      }

    </>
  );
}
