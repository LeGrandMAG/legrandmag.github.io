import {Routes, Route, Link} from 'react-router-dom'
import {Hero,BookPresentation, Navbar, Footer} from './components/Content';
import {useState} from "react"

import logo from './logo.svg';
import './App.css';
import Publication from './Page/Publication';

import Home from './Page/Home'
import Projects from './Page/Projects'
import Culture from './Page/Culture'
import NotFound from './Page/Notfound'



import {Wrapper, Status} from "@googlemaps/react-wrapper"
function App() {
  const [state, setState] = useState()
  const key ="AIzaSyB4eDBdG6YnpHEuodh2Wcr3rBIkEJeUowg"
  const url ="https://maps.googleapis.com/maps/api/js?key="+key


  
  


  const url2 = "https://swapi.dev/api/people/1"

  
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/publication" element={<Publication/>}/>
        <Route path="/culture/" element={<Culture/>}/>
        <Route path="*" element={<NotFound/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
