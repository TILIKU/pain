import classes from "../css/SectionLeft.module.css"


function SectionLeftGreen(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextGreen}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextGreen}>{props.subText}</p>
                <button className={classes.btnGreen} style={props.css}>Learn More</button>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftGreen