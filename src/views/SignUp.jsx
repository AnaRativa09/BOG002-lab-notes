import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveUser } from '../controller/firebaseAuth';

export default function SignUp() {
  const history = useHistory();

  const initialValueUser = { email: '', password: '' };
  const [user, setUser] = useState(initialValueUser);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const signUpUser = (e) => {
    e.preventDefault();

    saveUser(user.email, user.password)
      .then(() => {
        history.push('/dashboard');
        console.log('logueado');
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Regístrate</h2>

      <form onSubmit={signUpUser}>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Correo electrónico" value={user.email} onChange={handleInputChange} required />
        </label>

        <label htmlFor="password">
          <input id="password" type="password" placeholder="Contraseña" value={user.email} onChange={handleInputChange} required />
        </label>

        <button type="submit">Crear cuenta</button>
      </form>

      <p>
        ¿Ya tienes cuenta?
        <a href="/login"> Inicia sesión </a>
      </p>
    </>
  );
}
