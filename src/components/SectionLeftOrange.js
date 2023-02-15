import classes from "../css/SectionLeft.module.css"
import { Link } from "react-router-dom"

function SectionLeftOrange(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextOrange}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextOrange}>{props.subText}</p>
                <Link to="/reasons"><button className={classes.btnOrange} style={props.css}>Learn More</button></Link>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftOrange