// Login.jsx
import React, { useState } from 'react';

function Login({ onLogin }) 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleSubmit = async (e) => {
      console.log('handleSubmit called');
      
      e.preventDefault();

      console.log(`Username: ${username}, Password: ${password}`);
      

      var url = `http://localhost:5065/HomeBudget/VerifyUser?username=${username}&password=${password}`;
      console.log(`URL: ${url}`);

      try {
        const response = await fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          onLogin();
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        alert('Error logging in ' + error );
      }
    };

    return handleSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
