import classes from "../css/Section.module.css"


function Section(props){
    return(
    <div className={classes.mainDiv}>
            <div className={classes.sectionText}>
                <h1 className={classes.mainText}>satauri ab anything</h1>
                <p className={classes.subText}>patara texti am ragacis shesaxeb mhm yup</p>
                <button className={classes.btn}>gilaki</button>
                </div>
            <div className={classes.sectionImg}><img className={classes.img} src={require(`../images/getoutofmyhead.jpg`)}></img></div> 
    </div>
    )
}

export default Section