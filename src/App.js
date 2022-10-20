import {Routes, Route} from 'react-router-dom'
import { Navbar, Footer} from './components/Content';
import {useState, useEffect} from "react"

//import logo from './logo.svg';
import './App.css';
import Publication from './Page/Publication';

import Home from './Page/Home'
import Projects from './Page/Projects'
import Culture from './Page/Culture'
import NotFound from './Page/Notfound'
import Resume from './Page/Resume'
import Studio243 from './Page/Studio243'




// import {Wrapper, Status} from "@googlemaps/react-wrapper"
function App() {
  //const [state, setState] = useState()
  const key ="AIzaSyB4eDBdG6YnpHEuodh2Wcr3rBIkEJeUowg"
  //const url ="https://maps.googleapis.com/maps/api/js?key="+key

  const [showButton, setShowButton] = useState(false);
  const [fixNav, setFixNav] = useState('fixed')

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);


  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  const url2 = "https://swapi.dev/api/people/1"

  
  

  return (
    <div className="App light">
      <Navbar/>
      <div className="content">

      <Routes >
        <Route path='' element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="publication" element={<Publication/>}/>
        <Route path="culture" element={<Culture/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="studio" element={<Studio243/>}/>


        <Route path="/*" element={<NotFound/>}/>

      </Routes>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Footer/>
    </div>
  )
}

export default App;
