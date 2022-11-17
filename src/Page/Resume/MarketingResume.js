import React from 'react'
//import photo from '../../assets/img/ps.jpg'
import {marketingWork, cert,  Awards} from '../../components/data'
import nanoid from 'nano-id'
import { Link } from 'react-router-dom'

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
function MarketingResume() {



const marketingWorkElements = marketingWork.map((item)=> <>
<WorkExperience
key = { nanoid()}
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


const certElements = cert[0].data.map((item)=>
<div key = { nanoid()} 
className='section'>
<div className ='section1 cert'>
  <p><strong>{item.name}<span>, {item.inst}</span></strong></p>
</div>
<div className='section2'>
  <p>{item.date}</p>
</div>
</div>)
const AwardElements = Awards.map((item)=>
<div key = { nanoid()} 
className='section'>
<div className ='section1 cert'>
  <p><strong>{item.name}<span>, {item.prize}</span></strong></p>
  
  <ul className='section-bullet gauche'>
  <li >
        <Role task={item.description}/>
      </li>

  </ul>
</div>
<div className='section2'>
  <p>{item.date}</p>
</div>
</div>)



  return (
    <div className = "resume_container">
        <p class="okay">
        This is my Software Engineering Resume. You can check out my   <Link className ="okay" to={"/resume/1"}> Software Engineering
            </Link> Resume 
        </p>

      <header style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
          <h3 style={{marginBottom:'30px'}}>Magloire Mukendi</h3>
          {/*<img src={photo} style={{width:120, height:'auto', borderRadius:'100%'}}>*/}
          </div>
        <div className='contact-container'>
          <div className="contact-info">
            <p>magmukendi0@gmail.com</p>
            <p>Dongdaemun-gu, Seoul, South Korea</p>
          </div>
          <div className='link-status'>
          <a href="https://linkedin.com/in/magmukendi" target='_blank'>linkedin.com/in/magmukendi</a>
            <p>Current visa status: <strong>D-10</strong></p>
            <p>
            TOPIK 4 | TOEIC 945
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
       {marketingWorkElements}
      </div>
      <div className='section-container'>
        <h4 className='section-title'>AWARDS</h4>
        {AwardElements}
      </div>
      <div className='section-container'>
        <h4 className='section-title'>CERTIFICATION & ADDITIONAL TRAINING</h4>
        {certElements}
      </div>
    </div>
  )
}

export default MarketingResume;