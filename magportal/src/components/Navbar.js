function NavElement(props){
    return(
        <liv className="navElement">
            <a href={props.link}>
                {props.name}
            </a>
        </liv>
    )
}


export default function Navbar(){
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