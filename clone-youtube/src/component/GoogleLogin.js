import React from 'react';

const GoogleLoginComponent = () => {
  const handleGoogleLogin = () => {
    window.location.href ="https://accounts.google.com/o/oauth2/auth?client_id=" +
        process.env.REACT_APP_GOOGLE_CLIENT_ID +
        '&redirect_uri=' +
        process.env.REACT_APP_REDIRECT_URI +
        "&response_type=token&"+
        "scope=https://www.googleapis.com/auth/youtube";
  };

  return (
    <div>
      <button className="login-button" onClick={handleGoogleLogin}>Google 로그인</button>
    </div>
  );
};

export default GoogleLoginComponent;