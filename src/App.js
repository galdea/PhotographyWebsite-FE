import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './component/footer';
import Navbar from './component/navbar';
import ScrollToTop from './component/scrollToTop';
import Animals from './pages/animals';
import ContactMe from './pages/contactMe';
import Home from './pages/home';
import Kids from './pages/kids';
import Natura from './pages/natura';
import OfHumanNature from './pages/ofHumanNature';
import Portraits from './pages/portraits';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop>
          <Navbar />

          <div className="ContentContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portraits" element={<Portraits />} />
              <Route path="/ofhumannature" element={<OfHumanNature />} />
              <Route path="/natura" element={<Natura />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/contactme" element={<ContactMe />} />
            </Routes>
          </div>

          <Footer />
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
