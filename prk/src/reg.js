import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь вы можете выполнить необходимую логику регистрации и сохранения данных

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <br />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <br />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
