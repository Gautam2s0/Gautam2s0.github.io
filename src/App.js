import './App.css';
import { About } from './Compoments/Pages/About';
import { Skills } from './Compoments/Pages/Skills';
import { Project } from './Compoments/Pages/Project';
import { Contect } from './Compoments/Pages/Contect';
import {  Github } from './Compoments/Component/Github';
import Navbar from './Compoments/Pages/Navbar';
import { Home } from './Compoments/Pages/Home/Home';

function App() {
  return (
    <div className="App" id="app">
      <div>
      <Navbar/>
      </div>
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Project/>
      <Contect/>
    </div>
  );
}

export default App;
