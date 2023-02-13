import classes from "../css/SectionLeft.module.css"

function SectionLeftBlue(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextBlue}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextBlue}>{props.subText}</p>
                <button className={classes.btnBlue} style={props.css}>Learn More</button>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftBlue