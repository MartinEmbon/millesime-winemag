import React from 'react';
import './WineVideoPage.css';
import logoImage from './logo-millesime.jpg'; // replace with your logo image path

function Video() {

 


  return (
    <>
      <div className="logo-container">
        
        <img src={logoImage} alt="Millésimé Wine Magazine Logo" className="logo-image" />
      </div>
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
      <h2 className="video-description__course-title">Curso: Vinos de Grecia</h2>
      <p className="video-description__course-description">
        Sumérgete en el fascinante mundo de los vinos griegos con nuestro curso especializado. Grecia, cuna de la viticultura, ofrece una variedad de vinos únicos y de alta calidad, que reflejan su rica historia y diversidad geográfica.
      </p>
      <h3 className="video-description__subheading">¿Qué aprenderás en este curso?</h3>
      <ul className="video-description__list-content">
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
      </ul>
      <h3 className="video-description__subheading">¿A quién va dirigido?</h3>
      <p >
        Este curso está diseñado para entusiastas del vino, sommeliers, profesionales de la gastronomía y cualquier persona interesada en expandir su conocimiento sobre los vinos griegos y su cultura vinícola.
      </p>
      <h3 className="video-description__subheading">¿Por qué elegir este curso?</h3>
      <ul className="video-description__list-content">
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
  );
}

export default Video;
