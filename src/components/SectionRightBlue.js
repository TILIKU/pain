import classes from "../css/SectionRight.module.css"
import { Link } from "react-router-dom"


function SectionRightBlue(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}>
            <img className={classes.img} src={props.img} alt="pain"></img>
        </div> 
        <div className={classes.sectionTextBlue}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subTextBlue}>{props.subText1}</p>
            <p className={classes.subTextBlue} style={props.subtxtCss}>{props.subText2}</p>
            <p className={classes.subTextBlue} style={props.subtxtCss}>{props.subText3}</p>
            <Link to="/benefits"><button className={classes.btnBlue} style={props.css} o>Learn More</button></Link>
        </div>
            
    </div>
    )
}

export default SectionRightBlue