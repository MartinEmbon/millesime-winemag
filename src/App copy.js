import React, { useState } from 'react';
import './WineVideoPage.css';
import './LoginForm.css';
import wineImage from './back.webp'


function WineVideoPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showLearnMore1, setShowLearnMore1] = useState(false);
  const [showLearnMore2, setShowLearnMore2] = useState(false);
  const [showLearnMore3, setShowLearnMore3] = useState(false);

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
          <h2>Curso: Vinos de Grecia</h2>
        <p>
          Sumérgete en el fascinante mundo de los vinos griegos con nuestro curso especializado. Grecia, cuna de la viticultura, ofrece una variedad de vinos únicos y de alta calidad, que reflejan su rica historia y diversidad geográfica.
        </p>
        <h3>¿Qué aprenderás en este curso?</h3>
        <ul>
         
          {showLearnMore1 && (
            <>
             <li>
            <strong>Historia y Tradición:</strong> Descubre la historia milenaria de la viticultura griega y cómo ha evolucionado hasta la actualidad.
          </li>
              <li>
                <strong>Regiones Vitivinícolas:</strong> Explora las principales regiones vinícolas de Grecia, como Macedonia, Peloponeso, Creta y las Islas del Egeo, y entiende cómo su geografía y clima influyen en la producción de vino.
              </li>
              <li>
                <strong>Variedades de Uva:</strong> Conoce las variedades autóctonas de uvas griegas como Assyrtiko, Xinomavro, Agiorgitiko y Moschofilero, y sus características distintivas.
              </li>
              <li>
                <strong>Métodos de Producción:</strong> Aprende sobre las técnicas tradicionales y modernas de elaboración de vinos en Grecia, y cómo cada método contribuye a los perfiles únicos de los vinos griegos.
              </li>
              <li>
                <strong>Cata y Maridaje:</strong> Desarrolla tus habilidades de cata con una guía práctica para identificar aromas, sabores y texturas. Además, descubre las mejores combinaciones de vinos griegos con platos de la cocina mediterránea.
              </li>
            </>
          )}
          <button onClick={() => setShowLearnMore1(!showLearnMore1)}>
            {showLearnMore1 ? 'Leer menos' : 'Leer más'}
          </button>
        </ul>
        <h3>¿A quién va dirigido?</h3>
        <p>
          Este curso está diseñado para entusiastas del vino, sommeliers, profesionales de la gastronomía y cualquier persona interesada en expandir su conocimiento sobre los vinos griegos y su cultura vinícola.
        </p>

        <h3>¿Por qué elegir este curso?</h3>
        <ul>
         
          {showLearnMore3 && (
            <>
              <li>
            <strong>Experiencia Auténtica:</strong> Aprende de expertos en vinos griegos y accede a contenido exclusivo y actualizado.
          </li>
              <li>
                <strong>Flexibilidad:</strong> Accede al curso en línea desde cualquier lugar y en cualquier momento, adaptando el aprendizaje a tu ritmo.
              </li>
              <li>
                <strong>Comunidad:</strong> Únete a una comunidad de apasionados por el vino y comparte tus experiencias y conocimientos con otros participantes.
              </li>
            </>
          )}
          <button onClick={() => setShowLearnMore3(!showLearnMore3)}>
            {showLearnMore3 ? 'Leer menos' : 'Leer más'}
          </button>
        </ul>
        <h3>¿A quién va dirigido?</h3>
        <p>
          Este curso está diseñado para entusiastas del vino, sommeliers, profesionales de la gastronomía y cualquier persona interesada en expandir su conocimiento sobre los vinos griegos y su cultura vinícola.
        </p>
        <h3>¿Por qué elegir este curso?</h3>
        <ul>
          <li><strong>Experiencia Auténtica:</strong> Aprende de expertos en vinos griegos y accede a contenido exclusivo y actualizado.</li>
          <li><strong>Flexibilidad:</strong> Accede al curso en línea desde cualquier lugar y en cualquier momento, adaptando el aprendizaje a tu ritmo.</li>
          <li><strong>Comunidad:</strong> Únete a una comunidad de apasionados por el vino y comparte tus experiencias y conocimientos con otros participantes.</li>
        </ul>
        <p>
          Embárcate en este viaje sensorial y educativo, y conviértete en un conocedor de los vinos de Grecia. ¡Inscríbete ahora y descubre los secretos mejor guardados de esta antigua tradición vitivinícola!
        </p>
      
          </div>
          <div className="download-section">
            <h2>Descargá la presentación</h2>
            <p>
            Descarga la presentación del video sobre vino para revisión y estudio.
            </p>
            <a
              href="caminho_da_apresentacao.pdf"
              download="apresentacao_vinho.pdf"
              className="download-link"
            >
              Descargar presentación
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default WineVideoPage;
