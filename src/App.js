import './App.css'
import { About } from './Components/Pages/About/About'
import { Home } from './Components/Pages/Home/Home'
import { Skills } from './Components/Pages/Skills/Skills'
import { Project } from './Components/Pages/Project/Project'
import { Navbar } from './Components/Pages/Navbar/Navbar'
import './Components//styles/fontstyle.css'
import { Box } from '@chakra-ui/react'
import Contact from './Components/Pages/Contact/Contact'
import Footer from './Components/Pages/Footer/Footer'
import { Calender } from './Components/Pages/Github/Calender'

function App () {
  return (
    <div className='App fontStyle'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Calender/>
      <Box
        boxSizing='border-box'
        pb='5%'
        backgroundColor={"#000"}
        id='project'>
        <Project/>
      </Box>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
