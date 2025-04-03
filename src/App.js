import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './js/Home';
import Navbar from './js/Nav';
import Sobre from './js/Sob' ;
import Projeto from './js/Proj';
import Habilidades from './js/Hab';
import Contatos from './js/Cont'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Projeto' element={<Projeto />} />
          <Route path='/Habilidades' element={<Habilidades />} />
          <Route path='/Contatos' element={<Contatos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
