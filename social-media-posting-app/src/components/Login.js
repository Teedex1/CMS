import React from 'react';
import { GoogleLogin } from 'react-oauth/google';
import { FacebookLogin } from 'react-oauth/facebook';

const Login = () => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Handle token storage and API connection with backend
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div>
      <h2>Login with Social Media</h2>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
      <FacebookLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
    </div>
  );
};

export default Login;