import classes from "../css/SectionLeft.module.css"
import { Link } from "react-router-dom"


function SectionLeftBrown(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextBrown}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextBrown}>{props.subText1}</p>
                <p className={classes.subTextBrown} style={props.subtxtCss}>{props.subText2}</p>
                <p className={classes.subTextBrown} style={props.subtxtCss}>{props.subText3}</p>
                <p className={classes.subTextBrown} style={props.subtxtCss}>{props.subText4}</p>
                <p className={classes.subTextBrown} style={props.subtxtCss}>{props.subText5}</p>
                <Link to="/aboutUs"><button className={classes.btnBrown} style={props.css}>Learn More</button></Link>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftBrown