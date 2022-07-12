import logo from './logo.svg';
import './App.css';
import {Hero,BookPresentation, Navbar, Footer} from './components/Content';
import Publication from './components/Publication';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Publication/>
      <Footer/>
    </div>
  )
}

export default App;
