import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getNotes } from '../controller/firebaseFirestore';
import { signOutUser } from '../controller/firebaseAuth';

import FormNotes from '../components/formNotes';

import '../styles/Dashboard.css';

export default function Dashboard() {
  const history = useHistory();

  const [dataNotes, setDataNotes] = useState([]);

  const userLogOut = () => {
    signOutUser()
      .then(() => {
        console.log('Cerrando sesión')
        history.push('/');
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getNotes('notes', setDataNotes);
  }, []);

  return (
    <>
      <button type="button" onClick={userLogOut}>Cerrar sesión</button>
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
