import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './component/footer';
import Navbar from './component/navbar';
import ScrollToTop from './component/scrollToTop';
import Animals from './pages/animals';
import Home from './pages/home';
import Kids from './pages/kids';
import Natura from './pages/natura';
import OfHumanNature from './pages/ofHumanNature';
import Photos from './pages/photos';
import Portraits from './pages/portraits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Photos />} path="/photos" />
            <Route element={<Portraits />} path="/portraits" />
            <Route element={<OfHumanNature />} path="/ofhumannature" />
            <Route element={<Natura />} path="/natura" />
            <Route element={<Kids />} path="/kids" />
            <Route element={<Animals />} path="/animals" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
