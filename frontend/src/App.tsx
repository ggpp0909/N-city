import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Admin, FAQ, Main, Mypage,NFTStore } from './pages/index';
import Login from './pages/Login/Login';
import GlobalStyle from './styles/global';
import DetailItem from './pages/NFTStore/DetailItem';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />         
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Login />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/store" element={<NFTStore />}/>
          <Route path="/store/detail" element={<DetailItem />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;