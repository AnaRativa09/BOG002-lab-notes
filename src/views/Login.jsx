import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../controller/authContext';
import { handleInput } from '../controller/formHandles';

export default function Login() {
  const history = useHistory();
  const { loginUser } = useAuth();

  const initialValueUser = { email: '', password: '' };
  const [user, setUser] = useState(initialValueUser);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(user.email, user.password)
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
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Iniciar Sesión</button>
      </form>

      <p>
        ¿No tienes cuenta aún?
        <a href="/signup"> Regístrate </a>
      </p>
    </>
  );
}

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleChangeEmail = (e) => setEmail(e.target.value);
// const handleChangePass = (e) => setPassword(e.target.value);
