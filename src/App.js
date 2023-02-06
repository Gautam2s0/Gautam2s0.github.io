import './App.css';
import Navbar from './Compoments/Pages/Navbar';
import { About } from './Compoments/Pages/About';
import { Skills } from './Compoments/Pages/Skills';
import { Project } from './Compoments/Pages/Project';
import {Resume} from  "./Compoments/Pages/Resume"
import { Contect } from './Compoments/Pages/Contect';
import { Home } from './Compoments/Pages/Home';
import {  Github } from './Compoments/Component/Github';

function App() {
  return (
    <div className="App" id="app">
      <Navbar/>
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
