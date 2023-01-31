import classes from "../css/SectionLeft.module.css"


function SectionLeftBrown(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionTextBrown}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subTextBrown}>{props.subText1}</p>
                <p className={classes.subTextBrown}>{props.subText2}</p>
                <p className={classes.subTextBrown}>{props.subText3}</p>
                <p className={classes.subTextBrown}>{props.subText4}</p>
                <p className={classes.subTextBrown}>{props.subText5}</p>
                <button className={classes.btnBrown}>Learn More</button>
            </div>
            <div className={classes.sectionImg}>
                <img className={classes.img} src={props.img} alt="balls"></img>
            </div> 
    </div>
    )
}

export default SectionLeftBrown