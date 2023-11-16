import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Theory from './components/Theory';
import Practical from './components/Practical';
import Assignment from './components/Assignment';
import Projects from './components/Projects';
import Mod1 from './components/Mod1';
import Mod2 from './components/Mod2';
import Mod3 from './components/Mod3';
import Mod4 from './components/Mod4';
import Mod5 from './components/Mod5';
import ModState from './contexts/ModContext';

export const animations = {
  hero: {
    initial: {
      scale: 0,
      opacity: 0
    },

    whileInView: {
      scale: 1,
      opacity: 1
    }
  }
}

const App = () => {

  return (
      <Router>
        <ModState>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/academics/theory' element={<Theory />} />
            <Route path='/academics/laboratory' element={<Practical />} />
            <Route path='/assignments' element={<Assignment />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/academics/theory/module1' element={<Mod1 />} />
            <Route path='/academics/theory/module2' element={<Mod2 />} />
            <Route path='/academics/theory/module3' element={<Mod3 />} />
            <Route path='/academics/theory/module4' element={<Mod4 />} />
            <Route path='/academics/theory/module5' element={<Mod5 />} />
          </Routes>
          <Footer />
        </ModState>
      </Router>
  )
}

export default App;
