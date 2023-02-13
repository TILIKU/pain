import classes from "../css/SectionRight.module.css"


function SectionRightGreen(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}>
            <img className={classes.img} src={props.img} alt="pain"></img>
        </div> 
        <div className={classes.sectionTextGreen}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subTextGreen}>{props.subText}</p>
            <button className={classes.btnGreen} style={props.css}>Learn More</button>
        </div>
            
    </div>
    )
}

export default SectionRightGreen