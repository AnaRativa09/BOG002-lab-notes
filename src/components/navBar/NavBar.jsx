import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="Header-nav">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </header>
  );
}
