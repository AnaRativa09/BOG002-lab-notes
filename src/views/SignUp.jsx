import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveUser } from '../controller/firebaseAuth';
import { handleInput } from '../controller/formHandles';

export default function SignUp() {
  const history = useHistory();

  const initialValueUser = { email: '', password: '' };
  const [user, setUser] = useState(initialValueUser);
  const [error, setError] = useState(null);

  const signUpUser = (e) => {
    e.preventDefault();

    saveUser(user.email, user.password)
      .then(() => {
        history.push('/dashboard');
        console.log('logueado');
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(''), 2000);  
      });
  };

  return (
    <>
      <h2>Regístrate</h2>

      <form onSubmit={signUpUser}>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={user.email}
            onChange={(e) => { handleInput(e, user, setUser); }}
            required
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => { handleInput(e, user, setUser); }}
            required
          />
        </label>

        {error && (<p className="error">{`Error: ${error}`}</p>)}

        <button type="submit">Crear cuenta</button>
      </form>

      <p>
        ¿Ya tienes cuenta?
        <a href="/login"> Inicia sesión </a>
      </p>
    </>
  );
}
