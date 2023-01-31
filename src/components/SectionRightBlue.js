import classes from "../css/SectionRight.module.css"


function SectionRightBlue(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}>
            <img className={classes.img} src={props.img} alt="pain"></img>
        </div> 
        <div className={classes.sectionTextBlue}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subTextBlue}>{props.subText1}</p>
            <p className={classes.subTextBlue}>{props.subText2}</p>
            <p className={classes.subTextBlue}>{props.subText3}</p>
            <button className={classes.btnBlue}>Learn More</button>
        </div>
            
    </div>
    )
}

export default SectionRightBlue