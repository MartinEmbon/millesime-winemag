import React, { useState, useEffect } from 'react';
import Video from './Components/Video/Video';
import Login from './Components/Login/Login';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'millesime' && password === 'millesime@2024') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Usuario/constraseña invalidos!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="wine-video-page">
      {!isLoggedIn && (
        <Login 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
      {isLoggedIn && (
        <>
          <button className='logout-button' onClick={handleLogout}>Salir</button>
          <Video />
        </>
      )}
    </div>
  );
}

export default App;
