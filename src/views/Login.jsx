import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUser } from '../controller/firebaseAuth';
import handleInput from '../controller/formHandles';

export default function Login() {
  const history = useHistory();

  const initialValueUser = { email: '', password: '' };
  const [user, setUser] = useState(initialValueUser);

  const loginUser = (e) => {
    e.preventDefault();

    signUser(user.email, user.password)
      .then(() => {
        history.push('/dashboard');
        console.log('logueado');
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Inicia sesión</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={user.email}
            onChange={(e) => { handleInput.onChange(e, user, setUser); }}
            required
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => { handleInput.onChange(e, user, setUser); }}
            required
          />
        </label>

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
