
import './App.css';
import { About } from './Components/Pages/About/About';
import { Home } from './Components/Pages/Home/Home';
import { Skills } from './Components/Pages/Skills/Skills';
import { Contact } from './Components/Pages/Contact/Contact';
import { Project } from './Components/Pages/Project/Project';
import { Navbar } from './Components/Pages/Navbar/Navbar';
import "./Components//styles/fontstyle.css"
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App fontStyle">
      <Navbar/>
      
      <Home/>
      <About/>
      <Skills/>
      <Box  boxSizing="border-box" pb="5%" backgroundColor={"Highlight"} id="project">
      <Project/>
      </Box>
      <Contact/>
      
    </div>
  );
}

export default App;
