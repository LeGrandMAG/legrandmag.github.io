import photo from "../"


/*This is the nav element of the app*/

function NavElement(props){
    return(
        <liv className="navElement">
            <a href={props.link}>
                {props.name}
            </a>
        </liv>
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
            <p id="myname"></p>
        </nav>
    )
}

/* This is a component to represent each book */
function BookPresentation(props){
    return(
        <div className="book--content">
            <h3>{props.title} title</h3>
            <img className="book-img"src=""></img>

        </div>
    )
}


function Hero(){
    return(
        <div className="hero">
            <p >Welcome to my portfolio website.</p>
            <hr/>
            <BookPresentation/>
        </div>
    )
}




function Footer(){
    return(
        <footer className ="footer">
            <hr/>
            <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                    <span>                        
                        <i class="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                    <span>                        
                        <i class="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/LeGrandMAG" target="_blank">
                    <span>                        
                        <i class="fa fa-github"></i>
                    </span>
                </a>
                <a href="https://twitter.com/MAGMukendi" target="_blank">
                    <span>                        
                        <i class="fa fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                    <span>                        
                        <i class="fa fa-facebook"></i>
                    </span>
                </a>
                <p >© Mag Mukendi 2022</p>
        </footer>
    )
    
}


export  {Hero, BookPresentation, Navbar, Footer}