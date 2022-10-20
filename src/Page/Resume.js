import React from 'react'
import photo from '../assets/img/ps.jpg'
import {work, cert} from '../components/data'


function Role(props){
  return(
      <p>{props.task}</p>
  )
}
function WorkExperience(props){
  return(
  <>
  <div className='section'>
          <div className='section1'>
            <p><strong>{props.company}
            {props.compLocation && <span>, {props.compLocation}</span>}</strong></p>
            <p>
              <em>

            {props.position}
            </em>
            </p>

          </div>
          <div className='section2'> 
          <p><strong>

          {props.location}
          </strong>
            </p>
            <p>{props.date}</p>
            </div>
        </div>
  </>

  )
}
function Resume() {

  const workElements = work.map((item)=> <>
  <WorkExperience
  compLocation = {item.companyLocation}
  company = {item.company}
  location = {item.location}
  position = {item.position}
  date = {item.date}
  />
  <div className='section1'>
    <ul className='section-bullet'>
      {item.responsibilities.map(role => <li>
        <Role task={role}/>
        </li>
        )}
    </ul>
  </div>
  </>)


const certElements = cert.map((item)=>
<div className='section'>
<div className ='section1 cert'>
  <p><strong>{item.name}<span>, {item.inst}</span></strong></p>
</div>
<div className='section2'>
  <p>{item.date}</p>
</div>
</div>)


  return (
    <div className = "resume_container">
      <header style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
          <p>Magloire Mukendi</p>
          <img src={photo} style={{width:120, height:'auto', borderRadius:5}}>
          </img>
          </div>
        <div className='contact-container'>
          <div className="contact-info">
            <p>+821090261605</p>
            <p>magmukendi0@gmail.com</p>
            <p>Dongdaemun-gu, Seoul, South Korea</p>
          </div>
          <div className='link-status'>
            <a href="https://linkedin.com/in/magmukendi" target='_blank'>linkedin.com/in/magmukendi</a>
            <p>Current visa status: <strong>D-10</strong></p>
            <p>Korean Level: <strong>
              TOPIK 4
              </strong>
              </p>
          </div>
        </div>
      </header>

      <div className='section-container'>
        <h4 className="section-title" >
          EDUCATION
        </h4>
        <div className='section'>

        <div className="section1">
          <p><strong>Hankuk University of Foreign Studies</strong></p>
          <p>Bachelor of Arts, Major: Business Administraion, Minor: Computer Engineering Systems</p>
        </div>
        <div className='section2'>
          <p><strong>Seoul,South Korea</strong></p>
          <p>August 2018 - Present</p>
        </div>
        </div>
      </div>



      <div className='section-container'>
        <h4 className='section-title'>EXPERIENCE</h4>
       {workElements}
      </div>
      <div className='section-container'>
        <h4 className='section-title'>CERTIFICATION & ADDITIONAL TRAINING</h4>
        {certElements}
      </div>
    </div>
  )
}

export default Resume