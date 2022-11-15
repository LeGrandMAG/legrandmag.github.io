import React from 'react'
import photo from '../../assets/img/ps.jpg'
import {frontEndWork, LeaderExp, OpenSourceContribution, cert, Awards} from '../../components/data'
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
function FrontEndResume() {

  const frontEndWorkElements = frontEndWork.map((item)=> <>
  <WorkExperience
  compLocation = {item.companyLocation}
  company = {item.company}
  location = {item.location}
  position = {item.position}
  />
  <div   
  key = {frontEndWork.indexOf(item)}
  className='section1'>
    <ul className='section-bullet'>
      {item.responsibilities.map(role => <li>
        <Role key = {nanoid()} task={role}/>
        </li>
        )}
    </ul>
  </div>
  </>)

const LeaderExpElements = LeaderExp.map((item)=> <>
<WorkExperience
compLocation = {item.companyLocation}
company = {item.company}
location = {item.location}
position = {item.position}
date = {item.date}
/>
<div   
key = {LeaderExp.indexOf(item)}
className='section1'>
  <ul className='section-bullet'>
    {item.responsibilities.map(role => <li>
      <Role key = {nanoid()} task={role}/>
      </li>
      )}
  </ul>
</div>
</>)

const OpenSourceElements = OpenSourceContribution.map((item)=> <>
<WorkExperience
compLocation = {item.description}
company = {item.name}
location = {item.location}
position = {item.position}
/>

<div   
key = {OpenSourceContribution.indexOf(item)}
className='section1'>
  <ul className='section-bullet'>
    {item.work.map(role => <li>
      <Role key = {nanoid()} task={role}/>
      </li>
      )}
  <p class="url-repo"><strong>Project Link: </strong><a href={item.repo}>{item.repo}</a></p>
  </ul>
</div>
</>)
const AwardElements = Awards.map((item)=>
<div key = { nanoid()} 
className='section'>
<div className ='section1 cert'>
  <p><strong>{item.name}<span>, {item.prize}</span></strong></p>
  
  {item.description && <ul className='section-bullet'>
    <li className='gauche'>
        <Role task={item.description}/>
      </li>

  </ul>}
</div>
<div className='section2'>
  <p>{item.date}</p>
</div>
</div>)


const certElements = cert[1].data.map((item)=>
<div key = { nanoid()} 
className='section'>
<div className ='section1 cert'>
  <p><strong>{item.name}<span>, {item.inst}</span></strong></p>
</div>
<div className='section2'>
  <p>{item.date}</p>
</div>
</div>)

  return (
    <div className = "resume_container">
        <p class="okay">
        This is my Software Engineering Resume. You can check out my   <Link className ="okay" to={"/resume/2"}>Marketing
            </Link> Resume 
        </p>
      <header style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
          <h3>Magloire Mukendi</h3>
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
            <a href="https://github.com/LeGrandMAG" target='_blank'>github.com/LeGrandMAG</a>

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
       {frontEndWorkElements}
      </div>
      <div className='section-container'>
        <h4 className='section-title'> LEADERSHIP EXPERIENCE</h4>
       {LeaderExpElements}
      </div>
      <div className='section-container'>
        <h4 className='section-title'> OPEN SOURCE COUNTRIBUTION</h4>
       {OpenSourceElements}
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

export default FrontEndResume