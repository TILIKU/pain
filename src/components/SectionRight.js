import classes from "../css/SectionRight.module.css"


function SectionRight(props){
    return(
    <div className={classes.mainDiv}>
        <div className={classes.sectionImg}><img className={classes.img} src={require(`../images/getoutofmyhead.jpg`)}></img></div> 
        <div className={classes.sectionText}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subText}>{props.subText}</p>
            <button className={classes.btn}>Learn More</button>
        </div>
            
    </div>
    )
}

export default SectionRight