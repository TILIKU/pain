import classes from "../css/SectionLeft.module.css"

function SectionLeftOrange(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextOrange}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextOrange}>{props.subText}</p>
                <button className={classes.btnOrange}>Learn More</button>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftOrange