import classes from "../css/SectionRight.module.css"


function SectionRightBrown(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}>
            <img className={classes.img} src={props.img} alt="pain"></img>
        </div> 
        <div className={classes.sectionTextBrown}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subTextBrown}>{props.subText}</p>
            <button className={classes.btnBrown}>Learn More</button>
        </div>
            
    </div>
    )
}

export default SectionRightBrown