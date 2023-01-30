import classes from "../css/SectionRight.module.css"


function SectionRightOrange(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}>
            <img className={classes.img} src={props.img} alt="pain"></img>
        </div> 
        <div className={classes.sectionTextOrange}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subTextOrange}>{props.subText}</p>
            <button className={classes.btnOrange}>Learn More</button>
        </div>
            
    </div>
    )
}

export default SectionRightOrange