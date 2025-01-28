import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Technologies from './pages/Technologies/Technologies';
import Projects from './pages/Projects/Projects';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import NotFound from './pages/NotFound/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="*" element={<NotFound />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
