import React, { useState } from 'react';
import './WineVideoPage.css';
import './LoginForm.css';
import wineImage from './back.webp'


function WineVideoPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode verificar o username e password
    // Por simplicidade, estamos usando valores fixos
    if (username === 'usuario' && password === 'senha') {
      setIsLoggedIn(true);
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="wine-video-page">
      {!isLoggedIn && (
        <div className="login-container">
          <div className="image-container">
            <img src={wineImage} alt="Imagem de Vinho" />
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <h2 className="form-title">Faça o Login</h2>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Senha:</label>
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
      )}

      {isLoggedIn && (
        <>
          <h1 className="page-title">The Wine School</h1>
          <div className="video-container">
            <iframe
              title="Wine Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XirDtoI4X7o"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description">
            <h2>Descrição do Vídeo</h2>
            <p>Coloque aqui a descrição do vídeo sobre vinho.</p>
          </div>
          <div className="download-section">
            <h2>Download da Apresentação</h2>
            <p>
              Faça o download da apresentação do vídeo sobre vinho para revisão
              e estudo.
            </p>
            <a
              href="caminho_da_apresentacao.pdf"
              download="apresentacao_vinho.pdf"
              className="download-link"
            >
              Baixar Apresentação
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default WineVideoPage;
