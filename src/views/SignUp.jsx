import React from 'react';

export default function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Holi');
  }

  return (
    <>
      <h2>Regístrate</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Correo electrónico" />
        </label>

        <label htmlFor="password">
          <input id="password" type="password" placeholder="Contraseña" />
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
