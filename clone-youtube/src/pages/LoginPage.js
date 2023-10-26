import React from 'react';
import GoogleLoginComponent from '../component/GoogleLogin';
import Main from '../component/section/Main'

const LoginPage = () => {
  return (
    <Main 
      title = "로그인 페이지"
      description="구글 로그인 페이지입니다.">
    <div>
      <h1>로그인 페이지</h1>
      <GoogleLoginComponent />
    </div>
    </Main>
  );
};

export default LoginPage;