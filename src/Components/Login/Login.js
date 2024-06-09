import React from 'react';
import './LoginForm.css';
import wineImage from '../../img-login.jpg';

function Login({ username, setUsername, password, setPassword, handleLogin }) {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={wineImage} alt="Imagem de Vinho" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Acceder</h2>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
