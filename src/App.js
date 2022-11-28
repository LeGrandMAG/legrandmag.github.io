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
import FrontEndResume from './Page/Resume/FrontEndResume'
import MarketingResume from './Page/Resume/MarketingResume'

import Studio243 from './Page/Studio243'
import {BlogDetail, BlogList, EditorElement} from './Page'




// import {Wrapper, Status} from "@googlemaps/react-wrapper"
function App() {
  //const [state, setState] = useState()
  //const key ="AIzaSyB4eDBdG6YnpHEuodh2Wcr3rBIkEJeUowg"
  //const url ="https://maps.googleapis.com/maps/api/js?key="+key

  const [showButton, setShowButton] = useState(false);
  const [fixNav, setFixNav] = useState('fixed')

  function checkScroll(){
       if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScroll )
    
    return () => window.removeEventListener("scroll", checkScroll )
  }, []);


  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


 // const url2 = "https://swapi.dev/api/people/1"

  
  

  return (
    <div className="App light">
      <Navbar/>
      <div className="content">

      <Routes >
        <Route path='' element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="publication" element={<Publication/>}/>
        <Route path="culture" element={<Culture/>}/>
        <Route path="resume/1" element={<FrontEndResume/>}/>
        <Route path="resume/2" element={<MarketingResume/>}/>
        <Route path="studio" element={<Studio243/>}/>
        <Route path="blog/" element = {<BlogList/>} />
        <Route path="blog/:id" element = {<BlogDetail/>} />
        <Route path="labo" element = {<EditorElement/>} />
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
