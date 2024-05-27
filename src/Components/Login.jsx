import React, { useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Login = ({ onLogin }) => {
  const [token, setToken] = useState('');

  const ref = useRef(null);
  const handleLogin = async () => {
    try {
      ref.current.continuousStart();
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ token: token }),
      });

      if (response.status === 200) {
        ref.current.complete();
        onLogin(true);
      } else {
        ref.current.complete();
        alert('Login Failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <div>
        <LoadingBar color="#0faa58" ref={ref} />
        <br />
      </div>
      <div className="Login">
        <div className="loginWrapper">
          <div
            className="left"
            style={{
              margin: '0rem',
            }}
          >
            <img
              className="logoImage"
              src="https://res.cloudinary.com/djywrhroe/image/upload/v1716726599/Shaurya-Frontend/LogoPNG2_g0nvky.png"
              alt=""
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <input
              type="text"
              placeholder="Your Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyDown={handleKeyDown}
              className="loginInput"
            />

            <button onClick={handleLogin} className="loginButton">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
