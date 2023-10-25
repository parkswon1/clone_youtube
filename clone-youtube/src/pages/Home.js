import React from 'react'
import { useAuth } from '../component/AuthContext';

const Home = () => {
    const { login } = useAuth();
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    // 토큰을 상태 또는 컨텍스트에 저장
    login(accessToken);

    const { authToken } = useAuth();

    const handleLoginClick = () => {
        // 버튼 클릭 시 로그인 페이지로 이동
        window.location.href = '/login';
      };
    
      return (
        <div>
          <h1>홈 페이지</h1>
          {authToken ? (
            <div>
                <p>인증 토큰: {authToken}</p>
                {/* 다른 토큰 관련 작업을 수행할 수 있음 */}
            </div>
            ) : (
                <p>로그인이 필요합니다.</p>
            )}
          <button onClick={handleLoginClick}>로그인 페이지로 이동</button>
        </div>
      );
    };

export default Home