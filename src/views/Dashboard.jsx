import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../controller/authContext';
import { getNotes } from '../controller/firebaseFirestore';

import FormNotes from '../components/FormNotes';
import Note from '../components/Note';

import '../styles/Dashboard.css';

export default function Dashboard() {
  const history = useHistory();
  const { logOutUser } = useAuth();

  const [dataNotes, setDataNotes] = useState([]);

  const userLogOut = () => {
    logOutUser()
      .then(() => {
        console.log('Cerrando sesión');
        history.push('/');
      })
      .catch((err) => console.error(err));
  };

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
          <Note key={dataNote.id} data={dataNote} />
        ))
      }

    </>
  );
}
