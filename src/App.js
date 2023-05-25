import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './component/footer';
import Navbar from './component/navbar';
import ScrollToTop from './component/scrollToTop';
import Home from './pages/home';
import ReactImageGallery from './pages/ReactImageGallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ReactImageGallery />} path="/photos" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
