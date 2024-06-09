import React, { useState } from 'react';


import Video from './Components/Video/Video';
import Login from './Components/Login/Login';

function WineVideoPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'millesime' && password === 'millesime@2024') {
      setIsLoggedIn(true);
    } else {
      alert('Usuario/constraseña invalidos!');
    }
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
        <Video/>
      )}
    </div>
  );
}

export default WineVideoPage;
