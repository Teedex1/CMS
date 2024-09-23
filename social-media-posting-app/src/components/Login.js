import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    // Handle token storage and API connection with backend
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  const handleFacebookResponse = (response) => {
    console.log("Facebook Login Response:", response);
    // Handle token storage and API connection with backend
  };

  return (
    <div>
      <h2>Login with Social Media</h2>

      {/* Google OAuth Login */}
      <GoogleLogin 
        onSuccess={handleGoogleSuccess} 
        onError={handleGoogleFailure} 
      />

      {/* Facebook OAuth Login */}
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={handleFacebookResponse}
        icon="fa-facebook"
      />
    </div>
  );
};

export default Login;