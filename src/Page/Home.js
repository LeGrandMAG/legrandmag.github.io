import { fontStyle } from '@mui/system'
import React from 'react'

function Home() {
  return (
    <div className="home-container light">
        <div className="">
      <br/><p className='gogo'>
          Hello this is Magloire Mukendi, frontEnd engineer based in Seoul, South Korea.
        <br/> Hacktoberfest just finished and I am just getting started with my Open Source contribution journey. You can check more details about it out <span style={{color:'rgb(0,0,105'}}><a href="https://github.com/LeGrandMAG/my100daysofOpenSource" target="_blank"> here</a>  </span>
        </p>
        <figure>
        <a href="https://holopin.io/@legrandmag" target="_blank">
          <img style={{height:'200px', margin: '5px'}} src="https://holopin.me/legrandmag" />
          </a>
        <figcaption style={{fontSize:'9px', fontStyle:'italic'}}>My Holopin badgets collected during my the 2022 Hacktoberfest</figcaption>
        </figure>
          </div>
        </div>
  )
}

export default Home