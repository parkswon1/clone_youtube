import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Main from './component/section/Main';
import Subscription from './pages/Subscription';
import Search from './pages/Search';
import Video from './pages/Video';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Main />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path='/search/:searchId' element={<Search />} />
            <Route path='/video/:videoId' element={<Video />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;