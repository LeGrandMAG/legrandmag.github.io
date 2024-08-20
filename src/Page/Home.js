//import { fontStyle } from '@mui/system'
import React from 'react'
// import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="home-container light">
        <div style={{textAlign:'justify'}}>
          {/*<p>I am currently taking Harvard University's cs50x you can check my progress <a target='_blank' href='https://github.com/magmukendi/cs50x'>HERE</a></p>*/}
          <p className='gogo'>Hello this is Mag, Software Engineer based in Greater Montreal, Canada.
            <br/><br/>
            "I'm totally into arts—music, painting, and photography—plus I geek out over web stuff, video games, and, believe it or not, maps! Yep, you heard that right: maps!"        {/*<br/> Hacktoberfest just finished and I am just getting started with my Open Source contribution journey. You can check more details about it out <span style={{color:'rgb(0,0,105'}}><a href="https://github.com/magmukendi/my100daysofOpenSource" target="_blank"> here</a>  </span>*/}
          </p>
          <p>Currently building <a rel="noreferrer"  target="_blank" href="https://poto.243studio.me">Pesa Poto Chance AI</a> and <a rel="noreferrer"  target="_blank" href="https://wepo.cc">wepo</a></p>
          <p><br/>Check out my blog, <a rel="noreferrer"  target="_blank" href="https://blog.magmukendi.com"><i>Le Coin Tech de Mag</i></a></p>
          <p style={{textAlign:'center'}}> <br/><br/><br/>Ha P to C U Here</p>
        
        </div>
    </div>
  )
}

export default Home