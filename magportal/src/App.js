import logo from './logo.svg';
import './App.css';
import {Hero,BookPresentation, Navbar, Footer} from './components/Content';
import Publication from './components/Publication';
import {useState} from "react"
import {Wrapper, Status} from "@googlemaps/react-wrapper"
function App() {
  const [state, setState] = useState()
  const key ="AIzaSyB4eDBdG6YnpHEuodh2Wcr3rBIkEJeUowg"
  const url ="https://maps.googleapis.com/maps/api/js?key="+key

  const love = ""
  
  const render = (status: Status)=>{
    return <h1>{status}</h1>
  }


  const url2 = "https://swapi.dev/api/people/1"

  fetch(url2)
  .then(res => res.json())
  .then(data => love = (data))
  

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <pre>{JSON.stringify(love['name'],null,2)}</pre>
      <Footer/>
    </div>
  )
}

export default App;
