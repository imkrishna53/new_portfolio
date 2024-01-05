import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { MobileMenuState } from './context/MobileMenuState';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <MobileMenuState>
    <Header />
    <Routes>
    <Route path="/" element={< Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    <Footer />
    </MobileMenuState>
  </Router>
  );
}

export default App;
