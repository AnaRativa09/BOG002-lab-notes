import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Welcome() {
  const history = useHistory();

  return (
    <>
      <h1>Notes App</h1>
      <p>Guarda tus notas de forma segura :)</p>
      <button type="button" onClick={() => { history.push('/login'); }}>Inicia sesión</button>
      <button type="button" onClick={() => { history.push('/signup'); }}>Regístrate</button>
    </>
  );
}
