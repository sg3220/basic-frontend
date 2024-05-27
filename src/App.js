import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import ChatApp from './Components/ChatApp.jsx';
import Login from './Components/Login.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Header />
          <ChatApp />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
