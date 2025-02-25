import {x} from "../components/data"


/* This is a component to represent each book */
function BookPresentation(props){
    return(
        <div className="book--content">
            <h6>{props.title}</h6>
            <p>by {props.author}</p>
            <img alt={props.title} className="book-img"src={props.img}/>
            <a rel="noreferrer" href={props.link} target="_blank">DOWNLOAD IT HERE</a>

        </div>
    )
}


function Culture(){

    const bookElements = x.map( item => <BookPresentation key={item.title} title = {item.title} author = {item.author} img={item.img} link ={item.link}/>)
    return(
        <div className="hero">
            <div className="hero-intro">

            <p className="slogan"><em>Empowering Black People!</em></p>
            </div>
            <hr/>
            {bookElements}

        </div>
    )
}


export default Culture