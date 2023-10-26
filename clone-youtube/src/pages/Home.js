import React from 'react'
import { useAuth } from '../component/AuthContext';
import Main from '../component/section/Main'
import Subscription from '../component/Subscription';

const Home = () => {
    const { login } = useAuth();
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    login(accessToken);

    const { authToken } = useAuth();

    const handleLoginClick = () => {
        window.location.href = '/login';
      };
      return (
        <Main 
          title="web-search" 
          description="나만의 유튜브."
        >
          <div>
            <h1>홈 페이지</h1>
            {authToken ? (
              <div>
                <Subscription id='Subscription' />
              </div>
            ) : (
              <div>
                <p>로그인이 필요합니다.</p>
                <button onClick={handleLoginClick}>로그인 페이지로 이동</button>
              </div>
            )}
          </div>
        </Main>
      );
    };

export default Home