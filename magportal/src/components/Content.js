import data from "./data"

import {useState} from "react"

/*This is the nav element of the app*/

function NavElement(props){
    return(
        <div className="navElement">
            <a href={props.link}>
                {props.name}
            </a>
        </div>
    )
}


/*This is the main nav bar of the app*/
function Navbar(){
    return (
        <nav>
            <ul>
                <NavElement 
                    name= "HOME"
                    link = "#"
                />
                <NavElement 
                    name= "CULTURE"
                    link = "#"
                />
                
                <NavElement 
                    name= "PROJECTS"
                    link = "#"
                />
            </ul>
           { /*<p id="myname">magloire mukendi</p> */}
        </nav>
    )
}

/* This is a component to represent each book */
function BookPresentation(props){
    return(
        <div className="book--content">
            <h6>{props.title}</h6>
            <p>by {props.author}</p>
            <img alt={props.title} className="book-img"src={props.img}/>
            <a href={props.link} target="_blank">DOWNLOAD IT HERE</a>

        </div>
    )
}


function Hero(){
    const [book, setBook] = useState(data)

    const bookElements = book.map( item => <BookPresentation key={item.title} title = {item.title} author = {item.author} img={item.img} link ={item.link}/>)
    return(
        <div className="hero">
            <div className="hero-intro">

            <p className="slogan"><em>Empowering Black People!</em></p>
            </div>
            <hr/>
            {/*{bookElements}*/}

        </div>
    )
}




function Footer(){
    return(
        <footer className ="footer">
            <hr/>
            <div>
                <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                    <span>                        
                        <i className="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                    <span>                        
                        <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/LeGrandMAG" target="_blank">
                    <span>                        
                        <i className="fa fa-github"></i>
                    </span>
                </a>
                <a href="https://twitter.com/MAGMukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-facebook"></i>
                    </span>
                </a>
            </div>
                <p >© Mag Mukendi 2022</p>
        </footer>
    )
    
}


export  {Hero, BookPresentation, Navbar, Footer}