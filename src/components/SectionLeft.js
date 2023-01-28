import classes from "../css/SectionLeft.module.css"


function SectionLeft(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionText}>
                <h1 className={classes.mainText}>{props.mainText}</h1>
                <p className={classes.subText}>{props.subText}</p>
                <button className={classes.btn}>Learn More</button>
                </div>
            <div className={classes.sectionImg}><img className={classes.img} src={props.img}></img></div> 
    </div>
    )
}

export default SectionLeft