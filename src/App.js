import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={< About/>} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
