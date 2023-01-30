import classes from "../css/SectionLeft.module.css"


function SectionLeftBrown(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextBrown}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextBrown}>{props.subText}</p>
                <button className={classes.btnBrown}>Learn More</button>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftBrown